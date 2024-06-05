function make_album(artist_name, title, track) {
    var album = {
        artist: artist_name,
        titles: title,
    };
    if (track !== undefined) {
        album.tracks = track;
    }
    return album;
}
var album1 = make_album("Fahad", "modeling");
var album2 = make_album("Sobia", "modeling");
var album3 = make_album("Bilal", "barat", 2);
console.log(album1, album2, album3);
