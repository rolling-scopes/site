# Debugging Next.js

## Debugging Next.js with VS Code

This guide provides a brief overview of how to set up and debug a Next.js application using Visual Studio Code (VS Code).

### Steps to Debug Next.js in VS Code

**1. Configure VS Code debugger for Next.js with Chrome**

At the root of your project in the `.vscode` folder need to set up a launch configuration in VS Code to debug your Next.js application.

To do this you need to rename the file `./vscode/launch-mac.json` or `./vscode/launch-win.json` depending on your OS to `./vscode/launch.json`. These configuration files are created for debugging in `Chrome`, for other browsers, please use the settings described in the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/configuring/debugging#debugging-with-vs-code).

**2. Start Debugging**

Now you can start debugging your Next.js application. Go to the `Debug view` by clicking on the Debug icon in the Activity Bar or press `⇧+⌘+D` (macOS) / `Ctrl+Shift+D` (Windows/Linux), select a launch configuration `Next.js: debug full stack`, then press `F5` or click the green `Start Debugging` or select `Debug: Start Debugging` from the Command Palette to start your debugging session.

**3. Set Breakpoints**

You can set breakpoints in your code by clicking in the gutter next to the line numbers in the editor. When the code execution reaches a breakpoint, it will pause, allowing you to inspect variables, step through code, and evaluate expressions.

**4. Inspect and Debug**

Use the Debug toolbar to control the execution of your code (MacOs/Windows):

- Continue (`F5`): Resume execution until the next breakpoint.

- Step Over (`F10`): Execute the next line of code, but do not step into functions.

- Step Into (`F11`): Step into the function call on the current line.

- Step Out (`Shift+F11`): Step out of the current function.

- Restart (`⇧+⌘+F5` / `Ctrl+Shift+F5`): Restart the debugging session.

- Stop (`Shift+F5`): Stop debugging.

For more advanced debugging techniques, refer to the [VS Code Debugging Documentation](https://code.visualstudio.com/docs/editor/debugging) and the [Next.js Documentation](https://nextjs.org/docs/app/building-your-application/configuring/debugging).

Happy debugging! 🚀
