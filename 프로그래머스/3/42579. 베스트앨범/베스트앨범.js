function solution(genres, plays) {
    let answer = [];
    let songs = {};
    
    genres.forEach((genre, idx) => {
        if (songs[genre]) {
            songs[genre] += plays[idx];
        } else {
            songs[genre] = plays[idx];
        }
    })
    
    let sortedSongs = Object.entries(songs);
    sortedSongs.sort((a, b) => b[1] - a[1]);
    
    const infoOfEachSong = genres.map((g, idx) => ({
        genre: g,
        index: idx,
        playCount: plays[idx]
    }))
    
    for (const song of sortedSongs) {
        const rank = [];
        let sortedSong = song.sort((a, b) => b.playCount - a.playCount);
        const genre = song[0];
        
        for (const info of infoOfEachSong) {
            if (genre === info.genre) {
                rank.push(info);
            }
        }
        
        let sortedRank = rank.sort((a, b) => b.playCount - a.playCount);
        
        sortedRank.forEach((rank, idx)=>{
            if(idx < 2){
            answer.push(rank.index)
            }        
        })
    }
    
    return answer;
}