function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const content = ['./src/app/**/*.{html,ts}'];

module.exports = {
  purge: {
    enabled: true,
    content,
  },
  content,
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          'video-playlist-progress': withOpacityValue(
            '--color-video-playlist-progress'
          ),
        },
      },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
  },
};
