# NGE Petroleum Website

A modern, visually appealing website for NGE Petroleum built with Next.js, React, shadcn/ui, and SVGR. This website features a fully functional contact form that saves submissions to a PostgreSQL database.

## Features

- 🚀 **Next.js 16** with App Router
- ⚛️ **React 19** with TypeScript
- 🎨 **shadcn/ui** components for beautiful UI
- 🖼️ **SVGR** configured for SVG imports
- 📱 **Fully Responsive** design
- ✨ **Modern Animations** and transitions
- 🎯 **SEO Optimized** with proper metadata
- 💾 **Database Integration** with Prisma and PostgreSQL (Neon)
- 📝 **Contact Form** with API endpoint and database storage

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **SVG Handling**: SVGR/Webpack
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma

## Getting Started

Hey there! 👋 Let's get this project up and running. Don't worry, it's pretty straightforward.

### Prerequisites

Before we start, make sure you have:
- **Node.js 18+** installed (check with `node --version`)
- **npm** or **yarn** package manager
- A **PostgreSQL database** (we recommend [Neon](https://neon.tech) - it's free and super easy to set up)
- **Git** (if you're cloning this repo)

### Step 1: Clone the Repository

If you haven't already, clone this repository:

```bash
git clone https://github.com/adityabauna/nexpetrol.git
cd nexpetrol
```

### Step 2: Install Dependencies

Install all the project dependencies:

```bash
npm install
```

This will install all the packages you need including Next.js, React, Prisma, and all the UI components.

### Step 3: Set Up Your Database

You'll need a PostgreSQL database. We use **Neon** (it's free and works great), but any PostgreSQL database will work.

#### Option A: Using Neon (Recommended - It's Free!)

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy your database connection string (it should look like `postgresql://user:password@host/database?sslmode=require`)

#### Option B: Using Your Own PostgreSQL Database

Just make sure you have a PostgreSQL database ready and know the connection string.

### Step 4: Configure Environment Variables

Create a `.env` file in the root directory of the project:

```bash
# Windows (PowerShell)
New-Item -Path .env -ItemType File

# Mac/Linux
touch .env
```

Then add your database connection string to the `.env` file:

```env
DATABASE_URL="your_database_connection_string_here"
```

For example, if you're using Neon:
```env
DATABASE_URL="postgresql://user:password@ep-xxxxx-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
```

**⚠️ Important**: Never commit your `.env` file to Git! It's already in `.gitignore`, so you're safe.

### Step 5: Set Up the Database Schema

Now let's set up Prisma and create the database tables:

```bash
# Generate Prisma Client
npx prisma generate

# Push the schema to your database (creates the tables)
npx prisma db push
```

This will create a `contacts` table in your database where form submissions will be stored. Pretty cool, right? 🎉

### Step 6: Run the Development Server

Now you're ready to go! Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser and you should see the website!

### Step 7: Test the Contact Form

Try filling out the contact form at the bottom of the page. When you submit it:
- The form will send the data to the API
- It will be saved to your database
- You'll see a success message

Want to see the data? You can use Prisma Studio (a visual database browser):

```bash
npx prisma studio
```

This will open a nice UI where you can browse all the contact form submissions in your database.

---

## Troubleshooting

### "Missing required environment variable: DATABASE_URL"

Make sure your `.env` file exists in the root directory and has the `DATABASE_URL` variable set correctly.

### "Error connecting to database"

Double-check your connection string:
- Make sure it's wrapped in quotes
- Verify the credentials are correct
- If using Neon, make sure you copied the pooler connection string

### Prisma Client not found

Run `npx prisma generate` - this creates the Prisma Client that your app needs to talk to the database.

## Project Structure

Here's how the project is organized:

```
nexpetrol/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # API endpoint for contact form submissions
│   ├── page.tsx              # Main homepage component
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── components/
│   └── ui/                   # shadcn/ui components (buttons, cards, etc.)
├── lib/
│   ├── prisma.ts            # Prisma Client instance (database connection)
│   └── utils.ts             # Utility functions
├── prisma/
│   └── schema.prisma        # Database schema definition
├── public/                  # Static assets (images, icons)
└── next.config.ts           # Next.js configuration with SVGR
```

### Key Files Explained

- **`prisma/schema.prisma`**: Defines your database structure (the `Contact` model)
- **`lib/prisma.ts`**: Creates a single Prisma Client instance (don't create multiple!)
- **`app/api/contact/route.ts`**: Handles POST requests from the contact form
- **`app/page.tsx`**: The main page with the contact form component

## Features Implemented

### Website Sections

1. **Hero Section** - Eye-catching gradient hero with key statistics
2. **Services** - Four service cards (Diesel/Petrol, CNG, CBG, EV)
3. **Why Choose Us** - Six compelling reasons with icons
4. **Process** - Four-step process visualization
5. **About** - Company information and values
6. **Contact** - Fully functional contact form with database integration
7. **Footer** - Comprehensive footer with links

### Visual Enhancements

- Gradient backgrounds
- Hover effects and transitions
- Card animations
- Badge components
- Responsive grid layouts
- Modern typography
- Color-coded service sections

### Contact Form Features

The contact form is fully functional and includes:

- ✅ Form validation (required fields, email format)
- ✅ Loading states (shows "Submitting..." while processing)
- ✅ Success/error messages
- ✅ Automatic form reset after successful submission
- ✅ Database storage (saves all submissions to PostgreSQL)
- ✅ Google Ads conversion tracking (if configured)

When someone fills out the form, the data is saved with these fields:
- Full Name
- Email
- Phone
- Service Interest (dropdown selection)
- Message
- Timestamps (created at, updated at)

You can view all submissions using Prisma Studio or by querying your database directly.

## Using SVGR

SVGR is configured in `next.config.ts`. You can import SVG files as React components:

```tsx
import FuelIcon from '@/public/fuel-icon.svg';

<FuelIcon className="w-6 h-6" />
```

## Customization

### Colors

Colors can be customized in `app/globals.css` using CSS variables.

### Components

Add more shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

## Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

### Deploying to Vercel (Recommended)

Vercel makes deploying Next.js apps super easy:

1. Push your code to GitHub (you already did this! 🎉)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. **Important**: Add your `DATABASE_URL` as an environment variable in Vercel's settings
5. Click "Deploy"

That's it! Your site will be live in minutes.

### Environment Variables for Production

When deploying, make sure to add these environment variables in your hosting platform:

- `DATABASE_URL` - Your PostgreSQL connection string

**⚠️ Security Tip**: Never hardcode your database credentials in your code. Always use environment variables!

## Database Management

### Viewing Contact Submissions

To see all contact form submissions in a nice UI:

```bash
npx prisma studio
```

This opens a browser at `http://localhost:5555` where you can view, edit, and delete contact submissions.

### Making Database Changes

If you need to modify the database schema:

1. Edit `prisma/schema.prisma`
2. Apply the changes:
   ```bash
   npx prisma db push
   ```
3. Regenerate Prisma Client:
   ```bash
   npx prisma generate
   ```

### Creating Migrations (For Production)

For a production app, you might want to use migrations instead of `db push`:

```bash
npx prisma migrate dev --name your_migration_name
```

This creates migration files that can be version controlled and applied to production databases.

## Contact Information

- **Phone**: +91 8800599662
- **Email**: info@ngepetroleum.com
- **Address**: F-433 Sector-63, Noida, Uttar Pradesh 201301, India
- **Website**: www.ngepetroleum.com

## Contributing

Found a bug or want to add a feature? Feel free to open an issue or submit a pull request!

## License

© 2025 NGE Petroleum. All rights reserved.

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio (database browser)
npx prisma studio

# Create a migration
npx prisma migrate dev --name migration_name
```

Happy coding! 🚀
