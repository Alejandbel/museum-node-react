import morgan from 'morgan';

/**
 * @param {Express}app
 */
export function useLogger(app) {
  app.use(
    morgan('[:date[iso]] Started :method :url for :remote-addr', {
      immediate: true,
    }),
  );

  app.use(
    morgan(
      '[:date[iso]] Completed :status :res[content-length] in :response-time ms',
    ),
  );
}
