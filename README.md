# Personal Photo Gallery

A minimal public photo gallery built with Next.js. Photographs and their descriptions are managed directly in GitHub; Vercel can deploy the site automatically whenever the repository changes.

## Add a photograph

1. Put an optimized image in `public/photos/`.
2. Add an entry to `data/photos.json`:

```json
{
  "id": "unique-photo-id",
  "src": "/photos/your-image.jpg",
  "title": "A short title",
  "description": "Your custom description."
}
```

3. Commit and push. Vercel will rebuild the site if connected to this repository.

The `id` must be unique. The `src` must exactly match the image filename and path.

## Run locally

Install Node.js (LTS), then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

1. Push this project to a GitHub repository.
2. Import that repository into Vercel.
3. Keep the detected Next.js build settings.
4. Add your custom domain in Vercel after choosing one.

## Notes

- No database or admin login is required for this version.
- The gallery is public. Do not commit private photographs or sensitive information.
- Images are stored in Git, so optimize them before uploading. GitHub blocks individual files over 100 MB; a large collection may eventually be better served by object storage.
