var express=require("express");
const router1=express.Router();



module.exports=router1;


router1.get("/", function(req,res){
    console.log("Authors");
    res.render("Authors",{ptitle:"Authors", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}],books:books});
});



var books=[
    {
        "title":"Broad Band",
        "id":"1",
        "author":"Claire L. Evans",
        "author_p":"https://media.gettyimages.com/photos/singer-claire-evans-of-the-band-yacht-performs-onstage-at-the-wired-picture-id456425772?s=612x612",
        "price":1,
        "category":"Science",
        "image":"https://raw.githubusercontent.com/sebastianthomas94/Assignment-Books/master/Broad%20Band%20-%20Science.jpg"
    },
    {
        "title":"Spying on Whales",
        "id":"2",
        "author":"Nick Pyenson",
        "author_p":"https://images.randomhouse.com/author/2173881",
        "price":1,
        "category":"Science",
        "image":"https://raw.githubusercontent.com/sebastianthomas94/Assignment-Books/master/Spying%20on%20Whales%20-%20Science.jpg"
    },
    {
        "title":"The Last Black Unicorn",
        "id":"3",
        "author":"Tiffany Haddish",
        "price":1,"author_p":"https://cdn.britannica.com/s:300x1000/31/198731-004-F72994CE.jpg",
        "category":"Humor",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81jfRGazQ6L.jpg"
    },
    {
        "title":"Calypso",
        "id":"4",
        "author":"David Sedaris",
        "price":1,"author_p":"https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2017/10/23/205435_1325220.jpg.800x1036_q95_crop-smart_upscale.jpg",
        "category":"Humor",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51YUhVyiGCL._SX329_BO1,204,203,200_.jpg"
    },
    {
        "title":"Year One",
        "id":"5",
        "author":"Nora Roberts",
        "price":1,"author_p":"https://m.media-amazon.com/images/M/MV5BNGEzNDEzOTUtZWIzZS00ZGVlLTg1MjktNzg0MjZhZmQ5MmU0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY317_CR4,0,214,317_AL_.jpg",
        "category":"Fantasy",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51OiGJ%2BU5xL.jpg"
    },    
    {
        "title":"Circe",
        "id":"6",
        "author":"Madeline Miller",
        "price":1,"author_p":"https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/miller_360x450.jpg?itok=6OgRPKX9&timestamp=1419352731",
        "category":"Fantasy",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51eaZ1mO9ML._SX321_BO1,204,203,200_.jpg"
    }, 
    {
        "title":"Elevation",
        "id":"7",
        "author":"Stephen King",
        "price":1,"author_p":"https://static01.nyt.com/images/2015/10/31/arts/31KING/31KING-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        "category":"Horror",
        "image":"https://images-na.ssl-images-amazon.com/images/I/91gsgcuEsOL.jpg"
    }, 
    {
        "title":"Baby Teeth",
        "id":"8",
        "author":"Zoje Stage",
        "price":1,"author_p":"http://3.bp.blogspot.com/_atW2inZj-G4/TABBJsxq4NI/AAAAAAAABNc/5gI4UnyaoIQ/s1600/Zoje.jpg",
        "category":"Horror",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81B-rqRYljL.jpg"
    }, 
    {
        "title":"The Poet X",
        "id":"9",
        "author":"Elizabeth Acevedo",
        "price":1,"author_p":"http://www.acevedowrites.com/wp-content/uploads/2018/06/102A2263.jpg",
        "category":"Poetry",
        "image":"data:image/jpeg;base64,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"
    }, 
    {
        "title":"Useless Magic",
        "id":"10",
        "author":"Florence Welch",
        "price":1,"author_p":"https://upload.wikimedia.org/wikipedia/commons/8/8a/Florencewelchcokefestival2013_%28cropped%29.jpg",
        "category":"Poetry",
        "image":"https://images-na.ssl-images-amazon.com/images/I/41VneWMNkHL._SX381_BO1,204,203,200_.jpg"
    }, 
    {
        "title":"Us Against You",
        "id":"11",
        "author":"Fredrick Backman",
        "price":1,"author_p":"https://images.gr-assets.com/authors/1493098924p8/6485178.jpg",
        "category":"Fiction",
        "image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516019348l/36373463._SY475_.jpg"
    }, 
    {
        "title":"Still me",
        "id":"12",
        "author":"Jojo Moyes",
        "price":1,"author_p":"https://images.gr-assets.com/authors/1400624880p5/281810.jpg",
        "category":"Fiction",
        "image":"https://prodimage.images-bn.com/pimages/9780399562464_p0_v1_s550x406.jpg"
    } 
	   , {
        "title":"Khasakinnte Edihasam",
        "id":"13",
        "author":"O V Vijayan",
        "price":1,"author_p":"https://www.indianetzone.com/photos_gallery/58/O__V__Vijayan.jpg",
        "category":"Fiction",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51oSov7fWtL._SX327_BO1,204,203,200_.jpg"
    } 
	  ,  {
        "title":"The Old Man And The Sea",
        "id":"14",
        "author":"Ernest Hemingway",
        "price":1,"author_p":"https://www.nobelprize.org/images/hemingway-13096-content-portrait-mobile-tiny.jpg",
        "category":"Fiction",
        "image":""
    } 
	  ,  {
        "title":"Immortals Of Meluha ",
        "id":"15",
        "author":"Amish Tripathi",
        "price":1,"author_p":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Amish_Tripathi_555.jpg/170px-Amish_Tripathi_555.jpg",
        "category":"Fiction",
        "image":""
    } 
	 ,   {
        "title":"God Of Small Things",
        "id":"16",
        "author":"Arundhati Roy",
        "price":1,"author_p":"https://cdn.britannica.com/96/167696-004-1362569B.jpg",
        "category":"Fiction",
        "image":"https://images-na.ssl-images-amazon.com/images/I/91UYJTiQ8DL.jpg"
    } 
	  ,  {
        "title":"PS I Love You",
        "id":"17",
        "author":"Cecelia Ahern",
        "price":1,"author_p":"https://images.gr-assets.com/authors/1414058421p5/7116.jpg",
        "category":"Fiction",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51glzbT6iCL._SX304_BO1,204,203,200_.jpg"
    } 
    ]

