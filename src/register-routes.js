import { registerUrl } from "./helpers/url-manager";

// incident related routes
registerUrl("landing", "/landing");
registerUrl("register", "/signup");
registerUrl("login", "/login");
registerUrl("/", "/");
registerUrl("contact", "/contact");
registerUrl("blog", "/blog");
registerUrl("blog-detail", "/blog-detail");
registerUrl("faq-page", "/faq");

//admin
registerUrl("admin/", "/admin");
registerUrl("admin/profile", "/admin/profile");
registerUrl("admin/user", "/user");
