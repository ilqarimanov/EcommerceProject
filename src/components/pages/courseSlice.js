import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import blog1 from '../../assets/img/blog1.jpg';
import blog2 from '../../assets/img/blog2.jpg';
import blog3 from '../../assets/img/blog3.jpg';
import blog4 from '../../assets/img/blog4.jpg';
import blog5 from '../../assets/img/blog5.jpg';

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      {
        id: uuidv4(),
        img: blog1,
        name: "HiFiMAN HE-R9 Review",
        description1: "Headphone Specifications: Frequency Response: 15Hz-35kHz; Impedance: 32 Ohms; Sensitivity:100dB;Weight: 328g",
        description2: "Many loyal listeners know HiFiMAN for their planar-diaphragm, open-back headphones. While dynamic closed-back headphones are not typically produced by HiFi Man, the HE-R9s are an exception. I recently came to recognize HiFi MAN for its unique designs, clear/balanced sound, and present low end. After listening to HiFi MAN’s newest release, I came to realize that the HE-R9 draws elements from its predecessors despite its new design. Look and Feel - I would describe the HE-R9s as having an elegant appearance. The leather headband, steel framing, and red earcups give them a sharp, classic look. They are lightweight and easy to put on, yet still quite sturdy and don’t feel cheap. They could be described as simple in design yet still robust. I was surprised by the flexibility of the headband and soft fabric material in the earcups when I put them on initially. Their secure over-the-ear design blocks ambient noise effectively as well. Overall they are quite comfortable due to their soft material and lightweight design. I personally felt the cups begin to tighten a bit while listening for an extended period of time, as they aren’t a perfect fit for my ears. This was not detrimental to the listening experience overall, yet it's worth noting for those planning on wearing the R9’s for a specific number of hours. Headphone Specifications: Frequency Response: 15Hz-35kHz, Impedance: 32 Ohms, Sensitivity:100dB, Weight: 328g",
        price: 30,
        rating: 3,
      },
      {
        id: uuidv4(),
         img: blog2,
        name: "Samsung Q900 98-inch QLED TV",
        description1: "The Q900 also features Samsung’s very own QLED technology, which stands for quantum-dot LED. It promises...",
        description2: "The Q900 also features Samsung’s very own QLED technology, which stands for quantum-dot LED. It promises true-to-life 8K HDR picture quality, AI-powered intelligence upscaling, as well as a quantum 8K processor, which allows the TV to perform exceptionally well no matter what you throw at it (figuratively, of course). Due to its intelligence, the Q900 will be able to adapt to every scene being played on its display by constantly changing the picture brightness and sound to match the conditions of the room. Samsung’s AI assistant Bixby is also present in the TV alongside other smarthome speakers.",
        price: 2500,
        rating: 4,
      },
      {
        id: uuidv4(),
        img: blog3,
        name: "TUF Gaming VG27AQL1A",
        description1: "Gaming Monitor –27 inch QHD (2560x1440), IPS,170Hz (above 144Hz), ELMB SYNC, G-Sync compatible...",
        description2: "Gaming Monitor –27 inch QHD (2560x1440), IPS,170Hz (above 144Hz), ELMB SYNC, G-Sync compatible, FreeSync Premium, 1ms (MPRT), 130 % sRGB, HDR 27-inch QHD (2560x1440) IPS gaming monitor with ultrafast 170Hz (overclocking) refresh rate designed for professional gamers and immersive gameplay ASUS Extreme Low Motion Blur Sync (ELMB SYNC) technology enables ELMB together with G-SYNC Compatible, eliminating ghosting and tearing for sharp gaming visuals with high frame rates. G-SYNC Compatible, delivering a seamless, tear-free gaming experience by enabling VRR (variable refresh rate) by default. Supports both Adaptive-Sync with NVIDIA GeForce* graphics cards and FreeSync with AMD Radeon graphics cards *Compatible with NVIDIA GeForce GTX 10 series, GTX 16 series, RTX 20 series and newer graphics cards High Dynamic Range (HDR) technology with professional color gamut delivers contrast and color performance that meets the DisplayHDR™ 400 certification.",
        price: 99,
        rating: 5,
      },
      {
        id: uuidv4(),
        img: blog4,
        name: "Galaxy S21 Ultra 5G.1",
        description1: "Introducing Galaxy S21 Ultra 5G.1. The highest resolution photos and video on a smartphone. Galaxy's fastest...",
        description2: "Introducing Galaxy S21 Ultra 5G. The highest resolution photos and video on a smartphone. Galaxy's fastest processor yet. A battery that goes all-day—and then some. First ever S Pen compatibility. A striking new design. It's an Ultra that easily lives up to its name.",
        price: 725,
        rating: 4,
      },
      {
        id: uuidv4(),
        img: blog5,
        name: "Samsung 'The Wall' 219-inch TV",
        description1: "When it comes to a large widescreen TV, no one would’ve suspected it to be as large as 219-inches. Of course...",
        description2: "When it comes to a large widescreen TV, no one would’ve suspected it to be as large as 219-inches. Of course, that isn’t surprising seeing as Samsung is the one behind the idea. With its smartphones already being dubbed as the greatest Android devices in the world, The Wall is just its latest concept piece that made its debut during CES 2019. What’s great about this behemoth is that it is made up of multiple panels while also sporting microLED, which is Samsung’s latest display technology. As it already dwarves its predecessor (which stands at 146-inches), The Wall is a modular TV, which means it can be expanded or downsized, depending on the situation. Its bezel-less display allows it to be more than just a conventional large widescreen TV; The Wall can also be used to display works of art when turned off, just one of the many features Samsung is proud of.",
        price: 1265,
        rating: 5,
      },

    ],
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export const selectCourses = (state) => state.courses.courses;

export default coursesSlice.reducer;