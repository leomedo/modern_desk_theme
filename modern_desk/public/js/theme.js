frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
 constructor() {
  super()
 }

 fetch_themes() {
  return new Promise((resolve) => {
   this.themes = [
    {
        name: "light",
        label: __("Frappe Light"),
        info: __("Light Theme")
    },
    {
        name: "dark",
        label: __("Timeless Night"),
        info: __("Dark Theme")
    },
    {
        name: "modern_ui_theme",
        label: __("Modern Desk UI"),
        info: __("A modern theme, copied from github")
    },
    {
        name: "automatic",
        label: __("Automatic"),
        info: __("Uses system's theme to switch between light and dark mode")
    }
   ];
   resolve(this.themes);
  });
 }
}