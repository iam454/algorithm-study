function solution(genres, plays) {
  const totalPlay = new Map();
  const songsByGenre = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (totalPlay.has(genres[i])) {
      totalPlay.set(genres[i], totalPlay.get(genres[i]) + plays[i]);
      songsByGenre.get(genres[i]).push({ id: i, play: plays[i] });
    } else {
      totalPlay.set(genres[i], plays[i]);
      songsByGenre.set(genres[i], [{ id: i, play: plays[i] }]);
    }
  }
  const totPlay = [...totalPlay].sort((a, b) => b[1] - a[1]);
  for (let genre of songsByGenre.keys()) {
    songsByGenre.get(genre).sort((a, b) => {
      if (b.play !== a.play) {
        return b.play - a.play;
      }
      return a.id - b.id;
    });
  }
  const ans = [];
  for (const [genre] of totPlay) {
    const songs = songsByGenre.get(genre);
    for (let i = 0; i < Math.min(2, songs.length); i++) {
      ans.push(songs[i].id);
    }
  }

  return ans;
}
