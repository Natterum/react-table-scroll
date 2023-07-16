Component for displaying a floating scroll from below for a table

## :hammer: How to install

```bash
npm install react-table-scroll
# or
yarn add react-table-scroll
```

## :low_brightness: How to use

```bash
import 'react-table-scroll/dist/assets/index.min.css';
import { ReactTableScroll } from 'react-table-scroll';

<ReactTableScroll>
  <table>...</table>
</ReactTableScroll>
```

## :loudspeaker: Important

**Do not use** **overflow: hidden** in parent layer and above for correct work.
