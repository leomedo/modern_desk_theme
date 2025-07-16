import frappe

@frappe.whitelist()
def switch_theme(theme):
    if theme in ["Dark", "Light", "Modern_ui_theme", "Automatic"]:
        frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
        frappe.local.message = f"Theme switched to {theme}"