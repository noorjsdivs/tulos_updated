# Tulos Ecommerce Application

This is a Next.js-based ecommerce application template integrated with Sanity for content management, Clerk for authentication, Stripe for payments, and Sendbird for chat functionality.
Follow the steps below to set up and customize the application.

## � Get Premium Source Code

[![Get Premium Source Code](https://img.shields.io/badge/Get%20Premium%20Source%20Code-Buy%20Now-brightgreen?style=for-the-badge)](https://buymeacoffee.com/reactbd/e/345823)

> **Purchase the complete premium source code with all features, lifetime updates, and premium support.**
>
> 🔗 **[https://reactbd.com/tulos](https://reactbd.com/tulos)**

---

## �🔗 Preview

## ![Dashboard Preview](/public/preview_image.png)

## Getting started

To set up the Tulos Ecommerce Application, follow these steps carefully:

### 1. Install npm Dependencies

First, install the required npm dependencies by running the following command in your terminal depend with package you are using:

```bash
npm install
or
yarn install
or
pnpm install
```

This will download all the necessary packages listed in package.json.

## 2. Create a New Sanity Project

Set up a Sanity project to manage your ecommerce content (e.g., products or blog posts):

```bash
npm create sanity@latest -- --env=.env.local --create-project "Tulos ecommerce" --dataset production
```

If you don’t have a Sanity account, this command will guide you to create one.
When prompted with "Would you like to add configuration files for a Sanity project in this Next.js folder?", select "n" (no), as the --env=.env.local flag handles this automatically.
After running this command, a .env.local file will be created (or updated) in your project root with:
NEXT_PUBLIC_SANITY_PROJECT_ID: A unique ID for your Sanity project, generated during this step.
NEXT_PUBLIC_SANITY_DATASET: Set to production.

- Note: You can verify your NEXT_PUBLIC_SANITY_PROJECT_ID later by logging into https://www.sanity.io/manage, selecting the "Tulos ecommerce" project, and checking the project details.

## 3. Set Up Environment Variables

The application requires additional environment variables beyond those set in Step 2. Edit your .env file in the project root to include the following:

```bash

NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=<already-set-by-step-2>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-09
SANITY_API_TOKEN=<your-sanity-api-token>
SANITY_API_READ_TOKEN=<your-sanity-api-read-token>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
SENDBIRD_APP_ID=<your-sendbird-app-id>

```

### Where to Find These Credentials

#### Sanity Variables:

SANITY_API_TOKEN and SANITY_API_READ_TOKEN:
Visit https://www.sanity.io/manage.
Select your "Tulos ecommerce" project.
Go to the "API" section.
Click "Add API token" and create tokens with the appropriate permissions (e.g., "Editor" for write, "Viewer" for read).
Copy the tokens into .env.local.

#### Clerk Variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY: Sign up at https://clerk.dev, create an application, and find these keys in your Clerk dashboard.

#### Stripe Variables:

STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET: Register at https://stripe.com, create an account, and retrieve these from your Stripe dashboard.

#### Sendbird Variable:

SENDBIRD_APP_ID: Sign up at https://sendbird.com, create an application, and copy the Application ID from your Sendbird dashboard.

#### Additional Notes:

NEXT_PUBLIC_BASE_URL: Set to http://localhost:3000 for local development. Update to your live domain (e.g., https://tulos.reactbd.com/) when deploying.
Do not commit .env.local to version control, as it contains sensitive data. Next.js automatically excludes it via .gitignore.

## 4. Optionally Import Demo Seed Data

To populate your Sanity project with sample data (e.g., products or blog posts), run:

```bash
npx sanity@latest dataset import seed.tar.gz
```

This step is optional and requires a seed.tar.gz file, which may be included with the template.

## 5. Run the Development Server

Launch the Next.js development server with:

```bash
npm run dev
or
yarn dev
or
pnpm dev
```

## 6. Access the Application

- Visit http://localhost:3000 in your browser to see the ecommerce website.
- Go to http://localhost:3000/admin/studio to access the Sanity Studio and manage your content.

## Customizing

To tailor the template to your needs:

- Modify files in the /app and /components directories.
- Changes will reflect instantly due to Next.js’s hot reloading feature.

## Useful Commands

```bash
# Listen to Stripe webhooks locally
stripe listen --forward-to localhost:3000/api/webhook

# Export Sanity dataset
sanity dataset export production ./seed.tar.gz

# Import Sanity dataset
npx sanity@latest dataset import seed.tar.gz
```

## References

- **Live Demo:** [https://tulos.reactbd.com](https://tulos.reactbd.com)
- **Webhook URL:** https://tulos.reactbd.com/api/webhook
- **Design Inspiration:** [Dribbble - Ecommerce Fashion Web](https://dribbble.com/shots/22963771-Ecommerce-Fashion-Web)

## License

This template is a commercial product licensed under ReactBD Technologies.

# Learn More

Dive into the technologies used in this application:

- Tailwind CSS - Utility-first CSS framework for styling [ https://tailwindcss.com/ ]
- @clerk/nextjs - Clerk’s Next.js integration for authentication and user management [ https://clerk.com/docs ]
- @headlessui/react - Unstyled, accessible UI components for React [ https://headlessui.com/ ]
- @radix-ui - Accessible component from Radix UI [ https://www.radix-ui.com/ ]
- @sanity/client - JavaScript client for interacting with Sanity APIs [ https://www.sanity.io/docs/client-libraries ]
- @sanity/icons - Icon library for Sanity projects [ https://www.sanity.io/plugins/icons ]
- @sanity/image-url - Utility for generating image URLs from Sanity assets [ https://www.sanity.io/docs/image-url ]
- @sanity/preview-url-secret - Utility for secure preview URLs in Sanity [ https://www.sanity.io/docs/preview-url-secret ]
- @sanity/vision - Debugging tool for Sanity queries [ https://www.sanity.io/plugins/vision ]
- @types/lodash - TypeScript definitions for Lodash [ https://www.npmjs.com/package/@types/lodash ]
- class-variance-authority - Utility for managing class variants in JavaScript/TypeScript [ https://cva.style/docs ]
- clsx - Utility for constructing className strings conditionally [ https://github.com/lukeed/clsx ]
- cmdk - Command menu component for React [ https://cmdk.paco.me/ ]
- date-fns - Modern JavaScript date utility library [ https://date-fns.org/docs ]
- dayjs - Lightweight date manipulation library [ https://day.js.org/docs ]
- embla-carousel-react - Extensible carousel library for React [ https://www.embla-carousel.com/ ]
- framer-motion - Animation library for React [ https://www.framer.com/motion/ ]
- install - Utility for installing npm packages [ https://www.npmjs.com/package/install ]
- lodash - Utility library for JavaScript [ https://lodash.com/docs ]
- lucide-react - Beautiful & consistent icons for React [ https://lucide.dev/ ]
- motion - Alias for Framer Motion, an animation library for React [ https://www.framer.com/motion/ ]
- next - React framework for server-rendered applications [ https://nextjs.org/docs ]
- next-sanity - Toolkit for integrating Sanity with Next.js [ https://www.sanity.io/docs/nextjs ]
- react - JavaScript library for building user interfaces [ https://react.dev/ ]
- react-dom - DOM-specific methods for React [ https://react.dev/reference/react-dom ]
- react-hot-toast - Notifications library for React [ https://react-hot-toast.com/ ]
- react-icons - Popular icons in React [ https://react-icons.github.io/react-icons/ ]
- sanity - Content management platform [ https://www.sanity.io/docs ]
- stripe - Payment processing platform [ https://stripe.com/docs ]
- styled-components - CSS-in-JS styling solution [ https://styled-components.com/docs ]
- tailwind-merge - Utility for merging Tailwind CSS classes [ https://github.com/dcastil/tailwind-merge ]
- tailwindcss-animate - Animation utilities for Tailwind CSS [ https://github.com/jamiebuilds/tailwindcss-animate ]
- zustand - State management for React [ https://zustand-demo.pmnd.rs/ ]
