export const useAppState = () =>
  useState("appState", () => {
    return {
      mobileMenuOpen: false,
      navigation: [
        { name: "HTML 👉 Markdown", href: "/convert" },
        { name: "Markdown 👉 HTML", href: "/convert" },
      ],
    };
  });
