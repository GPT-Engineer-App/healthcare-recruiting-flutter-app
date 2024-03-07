# healthcare-recruiting-flutter-app

Sure, here's an example of how you can structure the front-end of the healthcare recruiting platform using Flutter:

```dart
// main.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:healthcare_recruiting/providers/auth_provider.dart';
import 'package:healthcare_recruiting/providers/job_provider.dart';
import 'package:healthcare_recruiting/providers/candidate_provider.dart';
import 'package:healthcare_recruiting/screens/auth_screen.dart';
import 'package:healthcare_recruiting/screens/job_listing_screen.dart';
import 'package:healthcare_recruiting/screens/candidate_profile_screen.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => JobProvider()),
        ChangeNotifierProvider(create: (_) => CandidateProvider()),
      ],
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Healthcare Recruiting',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: AuthScreen(),
      routes: {
        '/job-listings': (context) => JobListingScreen(),
        '/candidate-profile': (context) => CandidateProfileScreen(),
      },
    );
  }
}
```

This is the main entry point of the Flutter app. We're using the `provider` package for state management and creating instances of our providers (`AuthProvider`, `JobProvider`, and `CandidateProvider`). The `AuthScreen` is set as the initial route, and we define two additional routes for job listings and candidate profiles.

```dart
// screens/auth_screen.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:healthcare_recruiting/providers/auth_provider.dart';

class AuthScreen extends StatefulWidget {
  @override
  _AuthScreenState createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final _formKey = GlobalKey<FormState>();
  String _email = '';
  String _password = '';

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      // Call the login method from AuthProvider
      context.read<AuthProvider>().login(_email, _password);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Healthcare Recruiting'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Email'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter your email';
                  }
                  return null;
                },
                onSaved: (value) {
                  _email = value!;
                },
              ),
              TextFormField(
                obscureText: true,
                decoration: InputDecoration(labelText: 'Password'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter your password';
                  }
                  return null;
                },
                onSaved: (value) {
                  _password = value!;
                },
              ),
              ElevatedButton(
                onPressed: _submitForm,
                child: Text('Login'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

This is an example of the `AuthScreen` where users can enter their email and password to log in. We're using a `Form` widget and `TextFormField` widgets for input validation. When the user clicks the "Login" button, we call the `login` method from the `AuthProvider`.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/healthcare-recruiting-flutter-app.git
cd healthcare-recruiting-flutter-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
