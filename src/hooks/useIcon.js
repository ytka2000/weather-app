import { useEffect, useState } from "react";

const useIcon = (iconName) => {
  const [icon, setIcon] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadIcon = async () => {
      try {
        setIsLoading(true);

        const response = await import(
          `../../WeatherIcons/SVG/4th Set - Color/${iconName}.svg`
        );
        const icon = response.default;

        setIcon(icon);
      } catch (e) {
        setError(e.message || "Failed to load icon.");
      } finally {
        setIsLoading(false);
      }
    };

    loadIcon();
  }, [iconName]);

  return { icon, isLoading, error };
};

export default useIcon;
