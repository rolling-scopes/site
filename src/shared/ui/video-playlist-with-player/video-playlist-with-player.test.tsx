import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { VideoPlaylistWithPlayer } from './video-playlist-with-player';
import { MOCKED_VIDEOS } from '@/shared/__tests__/constants';
import { VideoPlayer } from '@/shared/ui/video-player';

vi.mock('@/shared/ui/video-player', () => ({ VideoPlayer: vi.fn(() => <div data-testid="mocked-video-player" />) }));

describe('VideoPlaylistWithPlayer Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the playlist and video player', () => {
    render(<VideoPlaylistWithPlayer videoItems={MOCKED_VIDEOS} />);

    expect(screen.getByTestId('mocked-video-player')).toBeVisible();
    expect(screen.getByTestId('playlist-title')).toHaveTextContent(`3 Video Feedbacks`);
    expect(screen.getAllByTestId(/thumbnail-\d+/)).toHaveLength(MOCKED_VIDEOS.length);
  });

  it('should select a new video when clicked', async () => {
    render(<VideoPlaylistWithPlayer videoItems={MOCKED_VIDEOS} />);

    await waitFor(() => {
      expect(screen.getByTestId('playlist')).toBeVisible();
    });

    const videoItem = screen.getByTestId('playlist-item-2');

    fireEvent.click(videoItem);

    await waitFor(() => {
      expect(VideoPlayer).toHaveBeenCalledTimes(3);
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
          'videoId': '1',
          'className': 'video-player',
          'data-testid': 'video-player',
        },
        undefined,
      );
      expect(VideoPlayer).toHaveBeenNthCalledWith(
        3,
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
    render(<VideoPlaylistWithPlayer videoItems={MOCKED_VIDEOS} />);

    const player = screen.getByTestId('main-video-area');

    act(() => {
      Object.defineProperty(player, 'offsetHeight', {
        configurable: true,
        value: 513,
      });
      window.dispatchEvent(new Event('resize'));
    });

    const playlistContainer = screen.getByTestId('playlist');

    expect(playlistContainer).toHaveStyle({ maxHeight: '513px' });

    act(() => {
      Object.defineProperty(player, 'offsetHeight', {
        configurable: true,
        value: 300,
      });
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(playlistContainer).toHaveStyle({ maxHeight: '300px' });
    });
  });
});
