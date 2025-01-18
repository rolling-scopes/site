import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { VideoPlaylistWithPlayer } from './video-playlist-with-player';
import { MOCKED_VIDEOS } from '@/shared/__tests__/constants';
import { VideoPlayer } from '@/shared/ui/video-player';

vi.mock('@/shared/ui/video-player', () => ({ VideoPlayer: vi.fn(() => <div data-testid="mocked-video-player" />) }));

const fetchMock = vi.spyOn(global, 'fetch');

describe('VideoPlaylistWithPlayer Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading state initially', () => {
    render(<VideoPlaylistWithPlayer playlistId="testPlaylist" apiKey="testApiKey" />);

    expect(screen.getByTestId('loading-message')).toBeVisible();
  });

  it('should render error message if fetching fails', async () => {
    fetchMock.mockRejectedValue(new Error('Error fetching playlist'));

    await waitFor(() => {
      render(<VideoPlaylistWithPlayer playlistId="testPlaylist" apiKey="testApiKey" />);
    });

    expect(screen.getByTestId('error-message')).toBeVisible();
    expect(screen.getByTestId('error-message')).toHaveTextContent('Error fetching playlist');
  });

  it('should render the playlist and video player after loading', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        items: MOCKED_VIDEOS.map((video) => ({
          snippet: {
            resourceId: { videoId: video.id },
            title: video.title,
            thumbnails: { medium: { url: video.thumbnail } },
          },
        })),
      }),
    } as Response);

    await waitFor(() => {
      render(<VideoPlaylistWithPlayer playlistId="testPlaylist" apiKey="testApiKey" />);
    });

    expect(screen.getByTestId('playlist')).toBeVisible();
    expect(screen.getByTestId('mocked-video-player')).toBeVisible();
    expect(screen.getByTestId('playlist-title')).toHaveTextContent(`3 Video Feedbacks`);
    expect(screen.getAllByTestId(/thumbnail-\d+/)).toHaveLength(MOCKED_VIDEOS.length);
  });

  it('should select a new video when clicked', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        items: MOCKED_VIDEOS.map((video) => ({
          snippet: {
            resourceId: { videoId: video.id },
            title: video.title,
            thumbnails: { medium: { url: video.thumbnail } },
          },
        })),
      }),
    } as Response);

    render(<VideoPlaylistWithPlayer playlistId="testPlaylist" apiKey="testApiKey" />);

    await waitFor(() => {
      expect(screen.getByTestId('playlist')).toBeVisible();
    });

    const videoItem = screen.getByTestId('playlist-item-2');

    fireEvent.click(videoItem);

    await waitFor(() => {
      expect(VideoPlayer).toHaveBeenCalledTimes(2);
      expect(VideoPlayer).toHaveBeenNthCalledWith(
        1,
        {
          'videoId': '1',
          'className': 'video-player',
          'data-testid': 'video-player',
        },
        undefined,
      );
      expect(VideoPlayer).toHaveBeenNthCalledWith(
        2,
        {
          'videoId': '2',
          'className': 'video-player',
          'data-testid': 'video-player',
        },
        undefined,
      );
    });
  });

  it('should update playlist height based on video player height', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        items: MOCKED_VIDEOS.map((video) => ({
          snippet: {
            resourceId: { videoId: video.id },
            title: video.title,
            thumbnails: { medium: { url: video.thumbnail } },
          },
        })),
      }),
    } as Response);

    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      get() {
        return 300;
      },
    });

    render(<VideoPlaylistWithPlayer playlistId="testPlaylist" apiKey="testApiKey" />);

    await waitFor(() => {
      expect(screen.getByTestId('playlist')).toBeVisible();
    });

    const playlistContainer = screen.getByTestId('playlist');

    expect(playlistContainer).toHaveStyle({ maxHeight: '513px' });

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(playlistContainer).toHaveStyle({ maxHeight: '300px' });
    });
  });
});
