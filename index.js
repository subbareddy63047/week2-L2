document.addEventListener("DOMContentLoaded", function () {
    const homePageCurouselSectionData = {
      name: "Home Page Curousel Section",
      homePageCurousalDataList: [
        {
          id: 1,
          imageUrl: "images/goldwatch.png",
          heading: "Exquisite Watches",
          caption: "Gold Luxury,",
          highlightedTextInCaption: "Choose Us",
          description:
            "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
          price: "$499.00",
          backgroundGradient:
            "linear-gradient(106deg, #F4A764 -2.93%, #FFDEC2 72.14%)",
        },
        {
          id: 2,
          imageUrl: "images/silverbalck.png",
          heading: "Dainty Timepieces",
          caption: "Silver Luxury, ",
          highlightedTextInCaption: "Choose Us",
          description:
            "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
          price: "$469.00",
          
          backgroundGradient:
            "linear-gradient(106deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)",
        },
        {
          id: 3,
          imageUrl: "images/silvergreen.png",
          heading: "Exquisite Watches",
          caption: "Gold Luxury, ",
          highlightedTextInCaption: "Choose Us",
          description:
            "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
          price: "$499.00",
          
          backgroundGradient:
            "linear-gradient(106deg, #30A357 -2.93%, #75E39A 72.14%)",
        },
        {
          id: 4,
          imageUrl: "images/silverred.png",
          heading: "Refined Timepieces",
          caption: "Choose Luxury, ",
          highlightedTextInCaption: "Choose Us",
          description:
            "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
          price: "$599.00",
         
          backgroundGradient:
            "linear-gradient(106deg, #F24F4F -2.93%, #FFA895 72.14%)",
        },
      ],
    };
    var splide = new Splide(".splide", {
      width: 500,
    });
  
    const curouselDetailsSection = document.querySelector(
      ".curousel-product-details-section"
    );
  
    const firstFoldWebsiteHomePageEl = document.querySelector(
      ".first-fold-website-home-page"
    );
    firstFoldWebsiteHomePageEl.style.background =
      homePageCurouselSectionData.homePageCurousalDataList[0].backgroundGradient;
  
    const productname = document.querySelector(".product-name");
    const caption = document.querySelector(".caption");
    const highlightedCaptionText = document.querySelector(
      ".highlighted-caption-text"
    );
    const description = document.querySelector(".description");
    const price = document.querySelector(".price");
  
    productname.innerText =
      homePageCurouselSectionData.homePageCurousalDataList[0].heading;
    caption.innerText =
      homePageCurouselSectionData.homePageCurousalDataList[0].caption;
    highlightedCaptionText.innerText =
      homePageCurouselSectionData.homePageCurousalDataList[0].highlightedTextInCaption;
    description.innerText =
      homePageCurouselSectionData.homePageCurousalDataList[0].description;
    price.innerText =
      homePageCurouselSectionData.homePageCurousalDataList[0].price;
  
    const splideListEl = document.querySelector(".splide__list");
    
  
    function createAndAppendCurouselImage() {
      homePageCurouselSectionData.homePageCurousalDataList.forEach((eachObj) => {
        const splideListItemEl = document.createElement("li");
        splideListItemEl.classList.add("splide__slide");
        splideListEl.appendChild(splideListItemEl);
  
        const splideListItemContainerEl = document.createElement("div");
        splideListItemEl.appendChild(splideListItemContainerEl);
  
        const splideListItemImageEl = document.createElement("img");
        splideListItemImageEl.src = eachObj.imageUrl;
        splideListItemImageEl.classList.add("slide-image");
  
        splideListItemContainerEl.appendChild(splideListItemImageEl);
      });
    }
  
    createAndAppendCurouselImage();
  
    splide.on("move", function (indexNumber) {
      console.log("index:", indexNumber);
      if (indexNumber === 0) {
        firstFoldWebsiteHomePageEl.style.background =
          homePageCurouselSectionData.homePageCurousalDataList[0].backgroundGradient;
        productname.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[0].heading;
        caption.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[0].caption;
        highlightedCaptionText.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[0].highlightedTextInCaption;
        description.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[0].description;
        price.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[0].price;
      }
      if (indexNumber=== 1) {
        firstFoldWebsiteHomePageEl.style.background =
          homePageCurouselSectionData.homePageCurousalDataList[1].backgroundGradient;
        productname.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[1].heading;
        caption.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[1].caption;
        highlightedCaptionText.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[1].highlightedTextInCaption;
        description.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[1].description;
        price.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[1].price;
      }
      if (indexNumber=== 2) {
        firstFoldWebsiteHomePageEl.style.background =
          homePageCurouselSectionData.homePageCurousalDataList[2].backgroundGradient;
        productname.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[2].heading;
        caption.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[2].caption;
        highlightedCaptionText.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[2].highlightedTextInCaption;
        description.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[2].description;
        price.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[2].price;
      }
      if (indexNumber === 3) {
        firstFoldWebsiteHomePageEl.style.background =
          homePageCurouselSectionData.homePageCurousalDataList[3].backgroundGradient;
        productname.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[3].heading;
        homePageCurouselSectionData.homePageCurousalDataList[3].caption;
        highlightedCaptionText.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[3].highlightedTextInCaption;
        caption.innerText = urousalDataList[3].highlightedTextInCaption;
        description.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[3].description;
        price.innerText =
          homePageCurouselSectionData.homePageCurousalDataList[3].price;
      }
    });
  
    splide.mount();
  });