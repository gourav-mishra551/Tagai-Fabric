import "./fabric.css";
const images = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2017/07/24/01/26/jute-2533318_640.jpg",
    text: "Jute",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2018/06/29/23/51/fabric-3506846_640.jpg",
    text: "Cotton",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2021/11/12/13/14/sweater-6788998_640.jpg",
    text: "Sweater Yarn",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2014/06/03/16/12/net-361328_640.jpg",
    text: "Net",
  },
  {
    id: 5,
    src: "https://cdn.shopify.com/s/files/1/0573/2689/5255/files/IMG_E7933_fe2c18a3-01c8-40ad-8766-6ef2e2c759d8.jpg?v=1700652549&width=480",
    text: "Velvet",
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2016/10/17/13/46/fabric-1747649_640.jpg",
    text: "Linen",
  },
  {
    id: 7,
    src: "https://5.imimg.com/data5/ZE/SS/HU/SELLER-7064954/handloom-silk-fabric-500x500.jpg",
    text: "Handloom Silk",
  },
  {
    id: 8,
    src: "https://3.imimg.com/data3/WB/RD/MY-7603732/handloom-linen-fabric-250x250.jpg",
    text: "Handloom Linen",
  },
  {
    id: 9,
    src: "https://www.poundametre.com/cdn/shop/articles/what-is-viscose-fabric-a-brief-introduction-173101.jpg?v=1695352853",
    text: "Viscose",
  },
  {
    id: 10,
    src: "https://linenlab.co.kr/cdn/shop/collections/linen-blend-667700.jpg?v=1666686252",
    text: "Linen Blend",
  },
  {
    id: 11,
    src: "https://i.etsystatic.com/10078905/r/il/b57b1f/4067147068/il_570xN.4067147068_8w65.jpg",
    text: "Velvet",
  },
  {
    id: 12,
    src: "https://affixapparel.com/blog/wp-content/uploads/2023/01/Knit-Fabrics-4-1024x684.jpg",
    text: "Knits",
  },
  {
    id: 13,
    src: "https://images.jdmagicbox.com/quickquotes/images_main/chanderi-silk-fabric-377824953-r7dhl.jpg",
    text: "Chanderi Silk",
  },
  {
    id: 14,
    src: "https://i.etsystatic.com/25067720/r/il/ff792c/3053455476/il_570xN.3053455476_375q.jpg",
    text: "Jacquard",
  },
  {
    id: 15,
    src: "https://www.polestargarments.com/wp-content/uploads/2020/04/LycraJerseyFabric-1.jpg",
    text: "Lycra",
  },
  {
    id: 16,
    src: "https://d1jsd7iv7h2l7v.cloudfront.net/wp-content/uploads/2021/12/Dusty-color-Paper-canvas-fabric-for-Bags-19439-2.jpg",
    text: "Cotton Canvas",
  },
  {
    id: 17,
    src: "https://d1jsd7iv7h2l7v.cloudfront.net/wp-content/uploads/2021/12/Blue-color-Cotton-Corduroy-fabric-for-Mens-Coats-18020-2.jpg",
    text: "Corduroy",
  },
  {
    id: 18,
    src: "https://bigreams.com/wp-content/uploads/2021/07/indigo-handblock-fabric-Rubyfabricslinings.com_-1200x1028.jpg",
    text: "Handblock",
  },
  {
    id: 19,
    src: "https://5.imimg.com/data5/ECOM/Default/2023/2/UX/FC/LJ/74409041/8521557a-2f2d-473d-bf64-e6af030814a3.jpg",
    text: "Brocade",
  },
  {
    id: 20,
    src: "https://cdn.pixabay.com/photo/2021/11/12/13/14/sweater-6788998_640.jpg",
    text: "Sweater Yarn",
  }
];

const Fabric = () => {
  return (
    <div className="heading-fabric">
      <h1 className="febric-heading">Choose Fabric From 10,000+ designs</h1>
      <div className="fabric-main">
        {images.map(({ id, src, text }) => (
          <div key={id} className="fabric-div">
            <img src={src} alt="" className="fabric-image" />
            <p className="fabric-text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fabric;
