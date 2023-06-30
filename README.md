# Interlude

Interlude Planner App is a productivity application built with Next.js and Firebase, designed to help desk-based workers plan their work with break intervals, which will enhance their productivity.

## Features

- User authentication: Sign up and login with email and password.
- Create work plans: Users can create multiple work plans with customizable work minutes and break durations.
- Delete work plans: Users have the option to delete their work plans.
- Dark and Light Mode: Application will detect the system preference and also give users the ability to switch between light and dark mode 
- Countdown timer: The app includes a countdown timer that triggers an alarm when the work time elapses, indicating it's time for a break.

## Technologies Used

- Next.js: A React framework for server-side rendering and building web applications.
- Firebase: A cloud-based platform for building web and mobile applications.
- React: A JavaScript library for building user interfaces.
- TailwindCSS: Styling the application.
- Languages: TypeScript and Javscript

## Installation

1. Clone the repository: 

```bash
  git clone  https://github.com/DoudGaya/interlude.git
```

2. Navigate to the project directory

```bash
  cd interlude

```

3. install the project

```bash
  npm install
  
```

3. Set up Google Firebase

```makefile
    NEXT_PUBLIC_FIREBASE_API_KEY=<YOUR_API_KEY>
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR_PROJECT_ID>
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR_STORAGE_BUCKET>
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR_SENDER_ID>
    NEXT_PUBLIC_FIREBASE_APP_ID=<YOUR_APP_ID>

```

3. start a development server 
```bash
   npm run dev
```

6. Open your browser and visit `http://localhost:3000` to see the app.

## Usage

1. Sign up or log in using your email and password.
2. Create a new work plan by providing the work minutes and break duration.
3. Delete a work plan if needed.
4. Start a work plan to trigger the countdown timer.
5. When the work time elapses, an alarm will be triggered, indicating it's time for a break.
6. Repeat the process for other work plans as necessary.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue in this repository.

## License

[MIT License](LICENSE)


