import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Playlist } from './playlist';
import { MOCKED_VIDEOS } from '@/shared/__tests__/constants';

const MOCKED_STYLE = { background: 'red' };

describe('Playlist Component', () => {
  it('should render the playlist title correctly', () => {
    render(<Playlist title="My Playlist" videos={MOCKED_VIDEOS} />);

    expect(screen.getByTestId('playlist-title')).toHaveTextContent('3 My Playlist');
  });

  it('should render the correct number of video items', () => {
    render(<Playlist title="My Playlist" videos={MOCKED_VIDEOS} />);

    expect(screen.getAllByTestId(/thumbnail-\d+/)).toHaveLength(MOCKED_VIDEOS.length);
    expect(screen.getAllByTestId(/video-title-\d+/)).toHaveLength(MOCKED_VIDEOS.length);
  });

  it('should apply the given style', () => {
    render(<Playlist title="My Playlist" videos={MOCKED_VIDEOS} style={MOCKED_STYLE} />);

    const playlist = screen.getByTestId('playlist');

    expect(playlist).toHaveStyle('background: red');
  });

  it('should call onSelectVideo when a video item is clicked', () => {
    const onSelectVideo = vi.fn();

    render(<Playlist title="My Playlist" videos={MOCKED_VIDEOS} onSelectVideo={onSelectVideo} />);

    const secondVideoItem = screen.getByTestId('playlist-item-2');

    fireEvent.click(secondVideoItem);

    expect(onSelectVideo).toHaveBeenCalledTimes(1);
    expect(onSelectVideo).toHaveBeenCalledExactlyOnceWith(MOCKED_VIDEOS[1]);
  });

  it('should highlight the selected video item', () => {
    render(
      <Playlist
        title="My Playlist"
        videos={MOCKED_VIDEOS}
        onSelectVideo={() => {}}
        selectedVideoId="2"
        style={MOCKED_STYLE}
      />,
    );

    const selectedItem = screen.getByTestId('playlist-item-2');

    expect(selectedItem).toHaveClass('selected');
    expect(screen.getByTestId('now-playing-overlay-2')).toBeVisible();
    expect(screen.getByTestId('playlist-item-1')).not.toHaveClass('selected');
    expect(screen.getByTestId('playlist-item-3')).not.toHaveClass('selected');
  });

  it('should not highlight any video if no video selected', () => {
    render(<Playlist title="My Playlist" videos={MOCKED_VIDEOS} />);

    MOCKED_VIDEOS.forEach((video) => {
      const selectedItem = screen.getByTestId(`playlist-item-${video.id}`);

      expect(selectedItem).not.toHaveClass('selected');
    });
  });
});
