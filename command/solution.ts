namespace CommandSolution {
    interface BlogPost {
        execute(params: any): any;
    }

    class BlogUtility {
        static a() {}
        static b() {}
        static c() {}
        static d() {}
        static e() {}
    }

    class SaveBlogPost implements BlogPost {
        execute() {
            BlogUtility.a()
            this.save()
        }

        protected save() {
            // menyimpan ke db
        }
    }

    class UpdateBlogPost implements BlogPost {
        execute() {
            BlogUtility.a()
            this.update()
        }

        protected update() {
            // update ke db
        }
    }

    class GetBlogPost implements BlogPost {
        execute(singlePost: boolean) {
            BlogUtility.b();
            if (singlePost) {
                this.getPost()
            } else {
                this.getPosts()
            }
        }

        protected getPost() {
        }

        protected getPosts() {
        }
    }

    new SaveBlogPost().execute()
}