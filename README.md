# Material Sidnav style HMR bug

Steps to reproduce the bug:
- Install dependencies and start the demo project
- Open Chrome dev tools
- "Disable cache" in the dev tools Network tab
- Reload the page with the dev tools open (if the error does not trigger the first time, try reloading again)

The bug disappears when the new style HMR is disabled: `ng serve --no-hmr`. 

## HMR enabled

![with HMR](https://github.com/user-attachments/assets/15226eaf-e32d-452a-a682-989ea4fa30fd)

## HMR disabled

![without HMR](https://github.com/user-attachments/assets/5d3294be-b8b8-4814-b669-0571155c350e)
