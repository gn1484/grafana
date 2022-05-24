import { BlugeSearcher } from './bluge';
import { SQLSearcher } from './sql';
import { GrafanaSearcher } from './types';

let searcher: GrafanaSearcher | undefined = undefined;

export function getGrafanaSearcher(): GrafanaSearcher {
  if (!searcher) {
    searcher = false ? new SQLSearcher() : new BlugeSearcher();
  }
  return searcher!;
}
