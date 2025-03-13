2. Install dependencies:


```shellscript
npm install
# or
yarn install
```

3. Set up environment variables:


Create a `.env.local` file in the root directory and add your environment variables (see Environment Variables section below).

4. Run the development server:


```shellscript
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## Usage

### Project Structure

```plaintext
personal-website/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── ...               # Other routes
├── components/           # React components
│   ├── ui/               # UI components from shadcn/ui
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...                   # Configuration files
```

### Customization

- **Content**: Update the content in the page files under the `app` directory.
- **Styling**: Modify the Tailwind CSS classes or update the theme in `tailwind.config.ts`.
- **Components**: Add or modify components in the `components` directory.


## Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) .

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import your project into Vercel:

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Select your Git provider
3. Select your repository
4. Configure your project settings (or use the defaults)
5. Click "Deploy"





Vercel will automatically detect that you're using Next.js and configure the build settings accordingly .

### Continuous Deployment

Once your project is set up on Vercel, any push to your main branch will trigger a new production deployment. Pushes to other branches will create preview deployments that you can use to test changes before merging to main .

### Custom Domains

To add a custom domain to your Vercel deployment:

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" > "Domains"
3. Add your domain and follow the instructions to configure DNS settings


## Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

```plaintext
# API Keys
NEXT_PUBLIC_API_URL=your_api_url
API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_tracking_id

# Other configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

When deploying to Vercel, add these environment variables in the Vercel dashboard under Project Settings > Environment Variables.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

