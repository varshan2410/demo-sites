# Adding a client demo

1. Create a typed configuration for the new business under config/.
2. Add it to siteConfigs in lib/getSiteConfig.ts.
3. Reuse SiteShell and shared components.
4. Add a focused domain component only where the customer journey genuinely differs.
5. Add local optimized WebP imagery under public/images/<business>/.
6. Verify the new route at mobile width, in light and dark modes, then update the feature matrix.

The objective is a content and theme swap for businesses of the same category—not a component rebuild.
