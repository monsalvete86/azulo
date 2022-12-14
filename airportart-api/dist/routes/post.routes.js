"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const post_controller_1 = require("../controllers/post.controller");
router.route('/')
    .get(post_controller_1.getPosts)
    .post(post_controller_1.createPost);
router.route('/:id')
    .get(post_controller_1.getPost)
    .delete(post_controller_1.deletePost)
    .put(post_controller_1.updatePost);
exports.default = router;
