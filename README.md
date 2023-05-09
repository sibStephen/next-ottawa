# Basic Starter Drupal setup with ddev commands.
mkdir my-drupalsite
cd drupalsite
ddev config --project-type=drupal10 --docroot=web --create-docroot
ddev start
ddev composer create drupal/recommended-project
ddev composer require drush/drush
ddev drush site:install --account-name=admin --account-pass=admin -y
ddev drush uli
ddev launch
composer require drupal/next

Open composer.json and add the following patches inside extra

 "patches": {
        "drupal/subrequests": {
            "Get same results on different request": "https://www.drupal.org/files/issues/2019-07-18/change_request_type-63049395-09.patch"
        },
        "drupal/decoupled_router": {
            "Unable to resolve path on node in other language than default": "https://www.drupal.org/files/issues/2022-11-30/decouple_router-3111456-resolve-language-issue-58.patch"
        }
    },  

Then run - composer require cweagans/composer-patches

Path alias set - admin/config/search/path/patterns/add

# Basic Starter Next JS setup.

Create a next js app 

Rename .env.example to .env.local (Add http for accessing local url, it might cause issue at times, or else set headers)

Add Drupal site link for both image and Drupal Base which would seve as a base url for API connection

Run yarn dev and see the magic :) 

## Documentation source

See https://next-drupal.org, https://ddev.readthedocs.io/en/latest/users/quickstart/

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchapter-three%2Fnext-drupal-basic-starter&env=NEXT_PUBLIC_DRUPAL_BASE_URL,NEXT_IMAGE_DOMAIN,DRUPAL_PREVIEW_SECRET,DRUPAL_CLIENT_ID,DRUPAL_CLIENT_SECRET&envDescription=Learn%20more%20about%20environment%20variables&envLink=https%3A%2F%2Fnext-drupal.org%2Fdocs%2Fenvironment-variables&project-name=next-drupal&demo-title=Next.js%20for%20Drupal&demo-description=A%20next-generation%20front-end%20for%20your%20Drupal%20site.&demo-url=https%3A%2F%2Fdemo.next-drupal.org&demo-image=https%3A%2F%2Fnext-drupal.org%2Fimages%2Fdemo-screenshot.jpg)
