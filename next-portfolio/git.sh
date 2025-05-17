#!/bin/bash

# Prompt the user for the file to add
echo "Enter the path of the file to add (e.g., app/blog/[...slug]/page.tsx):"
read git_add_file


# Prompt the user for a commit message
echo "Enter your commit message:"
read commit_message

# Stage all changes
git add "$git_add_file"

# Commit with the provided message
git commit -m "$commit_message"

# Push the changes
git push