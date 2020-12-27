namespace Command2 {
    class BlogService {
        a() {}
        b() {}
        c() {}
        d() {}
        e() {}
        f() {}
    }

    interface BlogPost {
        execute(params: any): any;
    }

    class SaveBlogPost implements BlogPost {
        execute() {
            const blog = new BlogService();
            blog.a();
            blog.b();
        }
    }

    new SaveBlogPost().execute()
}