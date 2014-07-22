angular.module('templates-cth', ['common/templates/logo.html', 'common/templates/pilot.html', 'post/postItem.html', 'post/postList.html']);

angular.module("common/templates/logo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/logo.html",
    "<svg class=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable-background=\"new 0 0 424 244\" xml:space=\"preserve\">\n" +
    "  <g>\n" +
    "  <g>\n" +
    "  <path d=\"M84.6 44.143c-4.02 0-6.3 2.1-6.3 7.44s2.28 7.4 6.3 7.44c4.02 0 6.299-2.1 6.299-7.44 S88.619 44.1 84.6 44.143z\" class=\"logo\"/>\n" +
    "  <path d=\"M222.238 50.803c0 4 1.7 6.7 5.8 6.66c2.46 0 4.08-0.96 5.22-1.98v-9.36 c-1.14-1.02-2.76-1.98-5.22-1.98C223.917 44.1 222.2 46.8 222.2 50.803z\" class=\"style0\"/>\n" +
    "  <path d=\"M114.239 51.583c0 4.5 1.6 7.3 5.6 7.32c2.46 0 4.32-1.02 5.34-1.98v-10.68 c-1.02-0.96-2.88-1.98-5.34-1.98C115.799 44.3 114.2 47.1 114.2 51.583z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 18v65h282V18H18z M152.278 25.664h9.48v8.28h-9.48V25.664z M49.02 58.483c4.2 0 5.879-2.04 6.18-6.72 h8.52c-0.6 9.06-5.28 13.859-14.759 13.859c-11.22 0-15.6-6.72-15.6-17.699c0-11.16 4.5-18.299 16.02-18.299 c9.359 0 13.9 4.7 14.3 13.919H55.2c-0.3-4.68-2.16-6.78-6.3-6.78c-5.82 0-6.96 4.14-6.96 10.859S43.08 58.5 49 58.483z M84.419 65.623c-7.02 0-14.459-3.18-14.459-13.919c0-10.979 7.8-14.1 14.819-14.1c7.08 0 14.5 3.2 14.5 13.9 C99.239 62.4 91.4 65.6 84.4 65.623z M133.258 65.022h-7.14v-3.6c-1.32 1.92-4.38 4.2-8.939 4.2 c-6.24 0-11.28-4.32-11.28-13.979c0-10.02 5.46-14.04 11.28-14.04c4.379 0 7 2.3 8 3.48V25.664h8.04V65.022z M169.258 65.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V65.022z M205.197 65.022h-8.04V49.843 c0-3.78-0.96-5.52-4.2-5.52c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04V38.204h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2 c4.8 0 9.4 2.5 9.4 10.8V65.022z M241.257 65.442c0 7.62-4.979 11.28-13.919 11.28c-5.64 0-12.54-1.44-12.839-10.62h7.68 c0.24 2.5 1.2 4.8 5.6 4.8c4.92 0 5.46-2.88 5.46-6.12v-4.14c-1.32 1.5-3.6 3.36-7.8 3.36c-6.419 0-11.52-4.32-11.52-13.08 c0-8.819 5.22-13.319 11.58-13.319c4.32 0 7.4 2.1 8.6 4.02v-3.42h7.14V65.442z M281.276 71.982h-33.359v-6.959h33.359V71.982z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  <g>\n" +
    "  <path d=\"M120.599 115.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C125.938 116.7 123.3 115.7 120.6 115.664z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 90v65h174V90H18z M62.699 116.263H49.44v8.58c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56 v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V116.263z M97.199 137.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52c-2.64 0-4.26 1.2-4.92 1.92v18.779H72V97.664h8.04v15.479 c1.14-1.38 3.3-3.54 7.919-3.54c4.92 0 9.2 2.5 9.2 10.8V137.022z M135.058 124.963h-20.759c0 3.8 1.9 6.6 6.8 6.6 c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16 c7.439 0 14.2 3.5 14.2 13.979V124.963z M173.278 143.982h-33.359v-6.959h33.359V143.982z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  <g>\n" +
    "  <path d=\"M336.596 187.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C341.936 188.7 339.3 187.7 336.6 187.664z\" class=\"style0\"/>\n" +
    "  <path d=\"M150.239 201.643c0 1.7 1.4 2.5 3.8 2.46c3.24 0 5.82-1.26 6.66-1.98v-2.76 c-0.84-0.18-3.3-0.36-5.22-0.36C152.458 199 150.2 199.5 150.2 201.643z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 162v65h388v-65H18z M296.276 169.664h9.48v8.28h-9.48V169.664z M224.277 169.664h9.48v8.28h-9.48 V169.664z M61.199 209.022H52.86v-14.219h-8.52v14.219H36v-34.739h8.339v13.56h8.52v-13.56h8.339V209.022z M97.199 209.022h-7.14 v-3.6c-1.32 1.98-4.08 4.2-8.64 4.2c-4.8 0-9.419-2.46-9.419-10.8v-16.619h8.04v15.179c0 3.8 1 5.5 4.2 5.5 c2.16 0 3.72-0.72 4.92-1.92v-18.779h8.04V209.022z M135.958 209.022h-6.899v-17.519c0-2.4-0.42-3.72-1.98-3.72 c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.839v-17.519c0-2.4-0.42-3.72-1.98-3.72c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.9v-26.819h6 v3.66c0.84-1.5 2.82-4.26 6.72-4.26c3.18 0 4.9 1.9 5.5 3.9c0.48-0.78 2.4-3.9 6.479-3.9c4.86 0 6.1 4.4 6.1 9.06V209.022z M172.258 208.422c-1.2 0.6-3.48 1.2-5.58 1.2c-3.54 0-4.68-1.68-4.68-3.84v-0.54c-1.38 1.74-4.38 4.38-10.08 4.4 c-5.28 0-9.719-2.34-9.719-7.74c0-6.12 5.64-7.86 11.459-7.86c3.06 0 5.8 0.5 7.1 0.84v-2.04c0-2.88-0.66-5.04-4.98-5.04 c-3.06 0-5.16 1.08-5.16 3.84h-7.5c0-7.08 5.64-10.02 13.139-10.02c6.9 0 12.5 2.5 12.5 10.56v10.02 c0 1 0.4 1.4 1.4 1.38c0.66 0 1.62-0.18 2.1-0.3V208.422z M205.197 209.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52 c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04v-26.819h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2c4.8 0 9.4 2.5 9.4 10.8V209.022z M241.257 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V209.022z M278.696 188.263h-13.259v8.58 c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479 v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V188.263z M313.256 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759 h8.22V209.022z M351.055 196.963h-20.759c0 3.8 1.9 6.6 6.8 6.6c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9 c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16c7.439 0 14.2 3.5 14.2 13.979V196.963z M372.235 209.6 c-7.68-0.06-13.919-2.16-14.099-9h8.219c0.24 2.6 2.9 3.3 6.5 3.3c3.12 0 5.88-0.54 5.88-2.46c0-2.22-3.9-2.4-9.18-3.24 c-5.16-0.84-10.86-2.16-10.86-8.16c0-5.939 5.64-8.459 13.68-8.459c7.02 0 12.7 1.9 13.1 8.52h-8.22 c-0.36-2.28-3-2.82-5.64-2.82c-2.82 0-4.68 0.6-4.68 2.16c0 1.9 2.9 2.2 9.2 3.06c5.28 0.7 10.9 2.2 10.9 8.3 C387.055 207.5 380.3 209.7 372.2 209.623z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  </g>\n" +
    "</svg>\n" +
    "<!-- <section id=\"logo\"> -->\n" +
    "<!--   <svg id=\"logo&#45;blank\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable&#45;background=\"new 0 0 424 244\" xml:space=\"preserve\"> -->\n" +
    "<!--     <g></g> -->\n" +
    "<!--     <rect x=\"18\" y=\"18\" width=\"282\" height=\"65\" class=\"style0\"/> -->\n" +
    "<!--     <rect x=\"18\" y=\"90\" width=\"174\" height=\"65\" class=\"style0\"/> -->\n" +
    "<!--     <rect x=\"18\" y=\"162\" width=\"388\" height=\"65\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--   </svg> -->\n" +
    "<!--  -->\n" +
    "<!--   <svg id=\"logo&#45;text\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable&#45;background=\"new 0 0 424 244\" xml:space=\"preserve\"> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <path d=\"M84.6 44.143c&#45;4.02 0&#45;6.3 2.1&#45;6.3 7.44s2.28 7.4 6.3 7.44c4.02 0 6.299&#45;2.1 6.299&#45;7.44 S88.619 44.1 84.6 44.143z\" class=\"logo\"/> -->\n" +
    "<!--     <path d=\"M222.238 50.803c0 4 1.7 6.7 5.8 6.66c2.46 0 4.08&#45;0.96 5.22&#45;1.98v&#45;9.36 c&#45;1.14&#45;1.02&#45;2.76&#45;1.98&#45;5.22&#45;1.98C223.917 44.1 222.2 46.8 222.2 50.803z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M114.239 51.583c0 4.5 1.6 7.3 5.6 7.32c2.46 0 4.32&#45;1.02 5.34&#45;1.98v&#45;10.68 c&#45;1.02&#45;0.96&#45;2.88&#45;1.98&#45;5.34&#45;1.98C115.799 44.3 114.2 47.1 114.2 51.583z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M18 18v65h282V18H18z M152.278 25.664h9.48v8.28h&#45;9.48V25.664z M49.02 58.483c4.2 0 5.879&#45;2.04 6.18&#45;6.72 h8.52c&#45;0.6 9.06&#45;5.28 13.859&#45;14.759 13.859c&#45;11.22 0&#45;15.6&#45;6.72&#45;15.6&#45;17.699c0&#45;11.16 4.5&#45;18.299 16.02&#45;18.299 c9.359 0 13.9 4.7 14.3 13.919H55.2c&#45;0.3&#45;4.68&#45;2.16&#45;6.78&#45;6.3&#45;6.78c&#45;5.82 0&#45;6.96 4.14&#45;6.96 10.859S43.08 58.5 49 58.483z M84.419 65.623c&#45;7.02 0&#45;14.459&#45;3.18&#45;14.459&#45;13.919c0&#45;10.979 7.8&#45;14.1 14.819&#45;14.1c7.08 0 14.5 3.2 14.5 13.9 C99.239 62.4 91.4 65.6 84.4 65.623z M133.258 65.022h&#45;7.14v&#45;3.6c&#45;1.32 1.92&#45;4.38 4.2&#45;8.939 4.2 c&#45;6.24 0&#45;11.28&#45;4.32&#45;11.28&#45;13.979c0&#45;10.02 5.46&#45;14.04 11.28&#45;14.04c4.379 0 7 2.3 8 3.48V25.664h8.04V65.022z M169.258 65.022h&#45;25.319v&#45;6.06h9.06v&#45;14.7h&#45;9.06v&#45;6.06h17.099v20.759h8.22V65.022z M205.197 65.022h&#45;8.04V49.843 c0&#45;3.78&#45;0.96&#45;5.52&#45;4.2&#45;5.52c&#45;2.16 0&#45;3.72 0.72&#45;4.92 1.92v18.779h&#45;8.04V38.204h7.14v3.6c1.32&#45;1.979 4.08&#45;4.2 8.64&#45;4.2 c4.8 0 9.4 2.5 9.4 10.8V65.022z M241.257 65.442c0 7.62&#45;4.979 11.28&#45;13.919 11.28c&#45;5.64 0&#45;12.54&#45;1.44&#45;12.839&#45;10.62h7.68 c0.24 2.5 1.2 4.8 5.6 4.8c4.92 0 5.46&#45;2.88 5.46&#45;6.12v&#45;4.14c&#45;1.32 1.5&#45;3.6 3.36&#45;7.8 3.36c&#45;6.419 0&#45;11.52&#45;4.32&#45;11.52&#45;13.08 c0&#45;8.819 5.22&#45;13.319 11.58&#45;13.319c4.32 0 7.4 2.1 8.6 4.02v&#45;3.42h7.14V65.442z M281.276 71.982h&#45;33.359v&#45;6.959h33.359V71.982z\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <path d=\"M120.599 115.664c&#45;2.7 0&#45;5.339 1.02&#45;6.18 4.439h12.36C125.938 116.7 123.3 115.7 120.6 115.664z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M18 90v65h174V90H18z M62.699 116.263H49.44v8.58c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34&#45;0.84 7.14&#45;1.56 v6.3c&#45;1.98 0.9&#45;5.1 1.92&#45;9.18 1.92c&#45;7.08 0&#45;10.859&#45;3.12&#45;10.859&#45;12.479v&#45;8.88h&#45;8.34v&#45;6.06h8.34v&#45;12.54h8.04v12.54h13.259V116.263z M97.199 137.022h&#45;8.04v&#45;15.179c0&#45;3.78&#45;0.96&#45;5.52&#45;4.2&#45;5.52c&#45;2.64 0&#45;4.26 1.2&#45;4.92 1.92v18.779H72V97.664h8.04v15.479 c1.14&#45;1.38 3.3&#45;3.54 7.919&#45;3.54c4.92 0 9.2 2.5 9.2 10.8V137.022z M135.058 124.963h&#45;20.759c0 3.8 1.9 6.6 6.8 6.6 c3 0 5.22&#45;1.02 5.58&#45;2.94h8.28c&#45;1.44 6.72&#45;7.44 9&#45;13.919 9c&#45;8.34 0&#45;14.879&#45;3.78&#45;14.879&#45;13.859c0&#45;10.8 7.5&#45;14.16 14.699&#45;14.16 c7.439 0 14.2 3.5 14.2 13.979V124.963z M173.278 143.982h&#45;33.359v&#45;6.959h33.359V143.982z\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <path d=\"M336.596 187.664c&#45;2.7 0&#45;5.339 1.02&#45;6.18 4.439h12.36C341.936 188.7 339.3 187.7 336.6 187.664z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M150.239 201.643c0 1.7 1.4 2.5 3.8 2.46c3.24 0 5.82&#45;1.26 6.66&#45;1.98v&#45;2.76 c&#45;0.84&#45;0.18&#45;3.3&#45;0.36&#45;5.22&#45;0.36C152.458 199 150.2 199.5 150.2 201.643z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M18 162v65h388v&#45;65H18z M296.276 169.664h9.48v8.28h&#45;9.48V169.664z M224.277 169.664h9.48v8.28h&#45;9.48 V169.664z M61.199 209.022H52.86v&#45;14.219h&#45;8.52v14.219H36v&#45;34.739h8.339v13.56h8.52v&#45;13.56h8.339V209.022z M97.199 209.022h&#45;7.14 v&#45;3.6c&#45;1.32 1.98&#45;4.08 4.2&#45;8.64 4.2c&#45;4.8 0&#45;9.419&#45;2.46&#45;9.419&#45;10.8v&#45;16.619h8.04v15.179c0 3.8 1 5.5 4.2 5.5 c2.16 0 3.72&#45;0.72 4.92&#45;1.92v&#45;18.779h8.04V209.022z M135.958 209.022h&#45;6.899v&#45;17.519c0&#45;2.4&#45;0.42&#45;3.72&#45;1.98&#45;3.72 c&#45;1.5 0&#45;2.7 1.32&#45;3.06 1.92v19.319h&#45;6.839v&#45;17.519c0&#45;2.4&#45;0.42&#45;3.72&#45;1.98&#45;3.72c&#45;1.5 0&#45;2.7 1.32&#45;3.06 1.92v19.319h&#45;6.9v&#45;26.819h6 v3.66c0.84&#45;1.5 2.82&#45;4.26 6.72&#45;4.26c3.18 0 4.9 1.9 5.5 3.9c0.48&#45;0.78 2.4&#45;3.9 6.479&#45;3.9c4.86 0 6.1 4.4 6.1 9.06V209.022z M172.258 208.422c&#45;1.2 0.6&#45;3.48 1.2&#45;5.58 1.2c&#45;3.54 0&#45;4.68&#45;1.68&#45;4.68&#45;3.84v&#45;0.54c&#45;1.38 1.74&#45;4.38 4.38&#45;10.08 4.4 c&#45;5.28 0&#45;9.719&#45;2.34&#45;9.719&#45;7.74c0&#45;6.12 5.64&#45;7.86 11.459&#45;7.86c3.06 0 5.8 0.5 7.1 0.84v&#45;2.04c0&#45;2.88&#45;0.66&#45;5.04&#45;4.98&#45;5.04 c&#45;3.06 0&#45;5.16 1.08&#45;5.16 3.84h&#45;7.5c0&#45;7.08 5.64&#45;10.02 13.139&#45;10.02c6.9 0 12.5 2.5 12.5 10.56v10.02 c0 1 0.4 1.4 1.4 1.38c0.66 0 1.62&#45;0.18 2.1&#45;0.3V208.422z M205.197 209.022h&#45;8.04v&#45;15.179c0&#45;3.78&#45;0.96&#45;5.52&#45;4.2&#45;5.52 c&#45;2.16 0&#45;3.72 0.72&#45;4.92 1.92v18.779h&#45;8.04v&#45;26.819h7.14v3.6c1.32&#45;1.979 4.08&#45;4.2 8.64&#45;4.2c4.8 0 9.4 2.5 9.4 10.8V209.022z M241.257 209.022h&#45;25.319v&#45;6.06h9.06v&#45;14.7h&#45;9.06v&#45;6.06h17.099v20.759h8.22V209.022z M278.696 188.263h&#45;13.259v8.58 c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34&#45;0.84 7.14&#45;1.56v6.3c&#45;1.98 0.9&#45;5.1 1.92&#45;9.18 1.92c&#45;7.08 0&#45;10.859&#45;3.12&#45;10.859&#45;12.479 v&#45;8.88h&#45;8.34v&#45;6.06h8.34v&#45;12.54h8.04v12.54h13.259V188.263z M313.256 209.022h&#45;25.319v&#45;6.06h9.06v&#45;14.7h&#45;9.06v&#45;6.06h17.099v20.759 h8.22V209.022z M351.055 196.963h&#45;20.759c0 3.8 1.9 6.6 6.8 6.6c3 0 5.22&#45;1.02 5.58&#45;2.94h8.28c&#45;1.44 6.72&#45;7.44 9&#45;13.919 9 c&#45;8.34 0&#45;14.879&#45;3.78&#45;14.879&#45;13.859c0&#45;10.8 7.5&#45;14.16 14.699&#45;14.16c7.439 0 14.2 3.5 14.2 13.979V196.963z M372.235 209.6 c&#45;7.68&#45;0.06&#45;13.919&#45;2.16&#45;14.099&#45;9h8.219c0.24 2.6 2.9 3.3 6.5 3.3c3.12 0 5.88&#45;0.54 5.88&#45;2.46c0&#45;2.22&#45;3.9&#45;2.4&#45;9.18&#45;3.24 c&#45;5.16&#45;0.84&#45;10.86&#45;2.16&#45;10.86&#45;8.16c0&#45;5.939 5.64&#45;8.459 13.68&#45;8.459c7.02 0 12.7 1.9 13.1 8.52h&#45;8.22 c&#45;0.36&#45;2.28&#45;3&#45;2.82&#45;5.64&#45;2.82c&#45;2.82 0&#45;4.68 0.6&#45;4.68 2.16c0 1.9 2.9 2.2 9.2 3.06c5.28 0.7 10.9 2.2 10.9 8.3 C387.055 207.5 380.3 209.7 372.2 209.623z\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--   </g> -->\n" +
    "<!--   </svg> -->\n" +
    "<!-- </section> -->\n" +
    "");
}]);

angular.module("common/templates/pilot.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/pilot.html",
    "<article class=\"about\">\n" +
    "  <section class=\"goals\">\n" +
    "    <h1>Pilot</h1>\n" +
    "\n" +
    "    <h2>Research through Coding</h2>\n" +
    "\n" +
    "    <p>Typewriter 90's tousled roof party chia Carles single-origin coffee twee, cred kitsch meggings mlkshk. Selvage mumblecore irony bitters Vice Brooklyn. Neutra 8-bit mustache actually vegan. Intelligentsia church-key Neutra whatever viral, hashtag fashion axe 8-bit pork belly. Echo Park sartorial retro DIY photo booth, selvage Helvetica. Blue Bottle craft beer Tonx, vegan High Life pour-over beard Kickstarter keytar scenester asymmetrical crucifix. Vice kale chips salvia photo booth pug.</p>\n" +
    "\n" +
    "    <p>Selvage synth put a bird on it, Brooklyn pour-over cred messenger bag literally disrupt Williamsburg Neutra actually. Brunch fashion axe art party, whatever pug bespoke cornhole chia lomo slow-carb. Small batch freegan Kickstarter whatever Odd Future. Fingerstache PBR&B twee, cardigan whatever McSweeney's master cleanse art party 3 wolf moon biodiesel meh deep v Intelligentsia. Fingerstache beard sartorial, ugh wayfarers scenester chillwave. Mustache you probably haven't heard of them mumblecore, messenger bag actually selfies sustainable Carles chillwave Thundercats selvage literally vegan. Hella four loko Banksy quinoa.</p>\n" +
    "\n" +
    "    <p>Raw denim brunch gentrify dreamcatcher leggings, +1 kale chips organic Carles Tumblr pug gluten-free. Sartorial High Life stumptown, four loko Odd Future pop-up ennui you probably haven't heard of them beard street art brunch. Ennui retro put a bird on it, narwhal Tonx bitters next level. Chillwave American Apparel fingerstache butcher. You probably haven't heard of them swag gentrify, ugh ennui selvage beard lomo fixie kale chips single-origin coffee Pitchfork hella mumblecore Pinterest. Salvia mixtape craft beer McSweeney's. Salvia craft beer 3 wolf moon, disrupt PBR cornhole church-key.</p>\n" +
    "\n" +
    "    <h2>Dynamic Innovation</h2>\n" +
    "\n" +
    "    <p>Before they sold out gluten-free squid vinyl, art party fap roof party leggings Tumblr pop-up craft beer mumblecore Tonx. Drinking vinegar American Apparel gluten-free, keffiyeh tousled vinyl hoodie lomo pop-up kitsch. Yr plaid kale chips, 90's authentic fixie Williamsburg irony High Life. PBR&B plaid meh, whatever jean shorts lomo trust fund sriracha vegan skateboard. Odd Future polaroid Vice, post-ironic locavore fixie ethical quinoa wayfarers pork belly skateboard church-key. Semiotics Brooklyn Cosby sweater asymmetrical. Brunch forage Austin, fingerstache pop-up church-key bicycle rights VHS Tonx Etsy freegan.</p>\n" +
    "\n" +
    "    <p>Mustache four loko XOXO skateboard church-key. Fashion axe fanny pack post-ironic plaid, paleo cray crucifix VHS Neutra authentic pop-up Helvetica Echo Park street art bespoke. PBR actually bicycle rights letterpress, master cleanse tattooed slow-carb biodiesel keffiyeh bespoke Intelligentsia sartorial Tumblr food truck. Dreamcatcher you probably haven't heard of them 3 wolf moon normcore Tonx trust fund Pinterest. Pork belly gastropub Vice Brooklyn, fap sriracha direct trade ethical Godard cliche asymmetrical gentrify. 8-bit trust fund occupy gluten-free whatever seitan. Leggings Blue Bottle art party, locavore ethical umami fingerstache pickled Pitchfork chia Pinterest four loko.</p>\n" +
    "\n" +
    "    <h2>From Student to Researcher</h2>\n" +
    "\n" +
    "    <p>Squid scenester single-origin coffee vinyl. Squid flexitarian jean shorts retro disrupt raw denim. Umami Tonx crucifix, wayfarers irony mlkshk Kickstarter brunch gastropub tousled. Pickled Thundercats selvage, umami Wes Anderson irony fashion axe post-ironic Banksy kogi Portland kitsch. Gluten-free leggings hashtag, ethical 90's four loko aesthetic yr vinyl pour-over mumblecore. Pitchfork fixie slow-carb 8-bit chia, meh sriracha street art actually sustainable Tonx tofu Echo Park put a bird on it. +1 try-hard put a bird on it, selvage farm-to-table aesthetic chia kitsch hashtag gastropub quinoa Intelligentsia Banksy.</p>\n" +
    "\n" +
    "    <p>Jean shorts irony street art, food truck lo-fi Marfa kitsch raw denim. Helvetica dreamcatcher blog Odd Future, Intelligentsia Tonx synth bicycle rights Kickstarter Williamsburg photo booth 8-bit Carles distillery PBR&B. Scenester normcore leggings swag High Life typewriter ethnic, raw denim Wes Anderson forage tote bag. Salvia normcore 3 wolf moon, ennui locavore direct trade chillwave retro swag 90's keytar seitan wayfarers occupy. Keffiyeh meggings locavore narwhal. Farm-to-table ethical Bushwick YOLO, American Apparel art party fanny pack lo-fi squid flexitarian letterpress put a bird on it. Locavore flexitarian kitsch pour-over Pinterest.</p>\n" +
    "\n" +
    "    <p>Vinyl readymade meh try-hard, occupy Portland you probably haven't heard of them. XOXO wolf Echo Park keytar, four loko kitsch small batch Godard bespoke vinyl pickled sustainable YOLO. Deep v ethnic farm-to-table Portland pug Shoreditch, bicycle rights vinyl leggings slow-carb kogi Thundercats. Irony DIY drinking vinegar polaroid, pickled cray cardigan Helvetica authentic yr literally Neutra. Chillwave viral you probably haven't heard of them gentrify kogi. Street art McSweeney's 8-bit YOLO, Marfa sustainable skateboard Wes Anderson forage Schlitz mustache crucifix brunch lomo +1. Irony pour-over quinoa gentrify pickled Banksy, semiotics Shoreditch scenester plaid church-key authentic Thundercats pop-up.</p>\n" +
    "\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"people\">\n" +
    "    <section class=\"students g-full\">\n" +
    "      <div class=\"g-full\">\n" +
    "        <h2>Students</h2>\n" +
    "      </div>\n" +
    "      <div class=\"g--third profile\" ng-repeat=\"student in pilot.students\">\n" +
    "        <h1 class=\"medium\">{{student.name.first}}</h1>\n" +
    "        <h1 class=\"medium\">{{student.study}}</h1>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"partners\">\n" +
    "      <h2>Partners</h2>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"staff\">\n" +
    "      <h2>Staff</h2>\n" +
    "    </section>\n" +
    "  </section>\n" +
    "</article>\n" +
    "");
}]);

angular.module("post/postItem.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("post/postItem.html",
    "<article class=\"post\" \n" +
    "         id=\"{{post.id}}\" \n" +
    "         ui-sref-active=\"active\" class=\"active\" \n" +
    "         ng-class=\"{selected: post.selected, expanded:post.expanded}\">\n" +
    "\n" +
    "\n" +
    "  <header>\n" +
    "      <a ng-show=\"!post.selected\" \n" +
    "         href ui-sref=\"posts.post({post_id: post.id})\">\n" +
    "        <img ng-src=\"{{post.headerImage.url}}\"/>\n" +
    "        <div class=\"selector\"></div>\n" +
    "\n" +
    "        <h1>{{post.title | underscorize}}</h1>\n" +
    "\n" +
    "      </a>\n" +
    "      <a ng-show=\"post.selected\" \n" +
    "         ng-click=\"toggleExpanded()\">\n" +
    "        <img ng-src=\"{{post.headerImage.url}}\"/>\n" +
    "        <div class=\"selector\"></div>\n" +
    "\n" +
    "        <h1>{{post.title | underscorize}}</h1>\n" +
    "\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </header>\n" +
    "\n" +
    "  <section class=\"text-content col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-1 col-lg-6 col-lg-offset-2 csSlideUp\">\n" +
    "    <div ng-bind-html=\"post.content | markdown\"></div>\n" +
    "  </section>\n" +
    "\n" +
    "\n" +
    "  <section class=\"meta col-xs-12 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-2\">\n" +
    "    <table class=\"table\">\n" +
    "      <thead>\n" +
    "        <th>Meta</th>\n" +
    "      </thead>\n" +
    "      <tr ng-repeat=\"author in post.authors\">\n" +
    "        <td>{{author}}</td>\n" +
    "      </tr>\n" +
    "    </table>\n" +
    "  </section>\n" +
    "\n" +
    "</article>\n" +
    "");
}]);

angular.module("post/postList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("post/postList.html",
    "<section scroll-into-view \n" +
    "         ui-sref-active=\"active\" class=\"triggered\"\n" +
    "         class=\"posts\">\n" +
    "  <post-item ng-repeat=\"post in postList.posts | orderBy: '-posted'\"\n" +
    "             scroll-into-view \n" +
    "             post=\"post\">\n" +
    "  </post-item>\n" +
    "</section>\n" +
    "");
}]);
