function make_album(artist_name: string,title:string,track?:number){
    let album :{artist:string,titles:String,tracks?:number}={
        artist:artist_name,
        titles:title,
        
    };
    if(track!==undefined){
album.tracks= track;
    }
    return album

}
let album1 = make_album("Fahad","modeling")
let album2 = make_album("Sobia","modeling");
let album3 = make_album("Bilal","barat",2);
console.log(album1,album2,album3);
