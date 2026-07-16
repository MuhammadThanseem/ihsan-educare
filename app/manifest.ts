import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IHSAN EDUCARE — Career & Exam Portal",
    short_name: "IHSAN EDUCARE",
    description:
      "One platform for every student after Plus Two: career streams, entrance exams, required documents and official websites.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ec",
    theme_color: "#0d3821",
    icons: [
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
