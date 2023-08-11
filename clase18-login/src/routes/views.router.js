import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
  if (req.session?.user) return res.redirect("/profile");
  res.render("login", {});
});
router.get("/register", (req, res) => {
  if (req.session?.user) return res.redirect("/profile");
  res.render("register", {});
});
function authentication(req, res, next) {
  if (req.session?.user) return next();
  res.redirect("/login");
}
router.get("/profile", authentication, (req, res) => {
  const user = req.session.user;
  res.render("profile", user);
});

export default router;
