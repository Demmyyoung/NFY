export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description?: string;
    colors: string[];
    sizes: string[];
}

export const products: Product[] = [
    {
        id: 1,
        title: "ESSENTIAL TEE / BLACK",
        price: 45000,
        image: "/images/Snapchat-1960843956.jpg",
        description: "Heavyweight cotton jersey. Boxy fit. Dropped shoulders. The essential foundation for any wardrobe.",
        colors: ["Black", "White", "Concrete"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: 2,
        title: "ESSENTIAL TEE / WHITE",
        price: 45000,
        image: "/images/Snapchat-1429450780.jpg",
        description: "Heavyweight cotton jersey. Boxy fit. Dropped shoulders. Clean, crisp, and versatile.",
        colors: ["White", "Black", "Charcoal"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: 3,
        title: "CARGO PANT / CONCRETE",
        price: 85000,
        image: "/images/Snapchat-1109526044.jpg",
        description: "Relaxed fit cargo pants featuring multiple utility pockets and adjustable hems. Durable cotton canvas construction.",
        colors: ["Concrete", "Black", "Olive"],
        sizes: ["30", "32", "34", "36"],
    },
    {
        id: 4,
        title: "UTILITY VEST / BLACK",
        price: 65000,
        image: "/images/Snapchat-1512587961.jpg",
        description: "Tactical utility vest with multi-functional pockets and adjustable side straps. Perfect for layering.",
        colors: ["Black", "Olive"],
        sizes: ["M", "L", "XL"],
    },
     {
        id: 5,
        title: "GRAPHIC HOODIE / GREY",
        price: 95000,
        image: "/images/Snapchat-1914707265.jpg",
        description: "Premium heavyweight fleece hoodie featuring a puff print graphic. Oversized fit for maximum comfort.",
        colors: ["Grey", "Black"],
        sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
        id: 6,
        title: "CAP / BLACK",
        price: 25000,
        image: "/images/Snapchat-851257041.jpg",
        description: "Structured 6-panel cap with embroidered logo. Adjustable metal buckle strap at the back.",
        colors: ["Black"],
        sizes: ["One Size"],
    },
    {
        id: 7,
        title: "KNIT BEANIE / CHARCOAL",
        price: 20000,
        image: "/images/Snapchat-997264739.jpg",
        description: "Soft ribbed knit beanie. Fold-over cuff with woven label. Essential for colder days.",
        colors: ["Charcoal", "Black", "Neon"],
        sizes: ["One Size"],
    },
    {
        id: 8,
        title: "MESSENGER BAG / BLACK",
        price: 110000,
        image: "/images/Snapchat-305570611.jpg",
        description: "Durable nylon messenger bag with waterproof zippers. Laptop compartment and quick-access pockets.",
        colors: ["Black"],
        sizes: ["One Size"],
    }
];
