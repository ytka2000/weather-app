import { useEffect, useState } from "react";

const useImage = (imageName) => {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);

        const response = await import(`../assets/cities/${imageName}.jpeg`);
        const image = response.default;

        setImage(image);
      } catch (e) {
        setError(e.message || "Failed to load image.");
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [imageName]);

  return { image, isLoading, error };
};

export default useImage;
