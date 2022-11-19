export const darkTheme = () => {
  document.documentElement.style.setProperty("--background-color", "#0e0e14");
  document.documentElement.style.setProperty(
    "--background-color-nav",
    "#008080"
  );
  document.documentElement.style.setProperty(
    "--background-color-form",
    "#1f1b24"
  );
  document.documentElement.style.setProperty("--text-color", "#cfd8dc");
  document.documentElement.style.setProperty("--input-bg-color", "#e7e6eb");
};

export const lightTheme = () => {
  document.documentElement.style.setProperty("--background-color", "#cfd8dc");
  document.documentElement.style.setProperty(
    "--background-color-nav",
    "#03dac5"
  );
  document.documentElement.style.setProperty(
    "--background-color-form",
    "#e0e5e5"
  );
  document.documentElement.style.setProperty("--text-color", "#353442");
  document.documentElement.style.setProperty("--input-bg-color", "#cfd8dc");
};

export default { darkTheme, lightTheme };
