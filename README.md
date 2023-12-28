# React table scroll

Component for displaying a floating scroll from below for a table in React

## :hammer: How to install

```bash
npm install react-table-scroll
# or
yarn add react-table-scroll
```

## :low_brightness: How to use

```bash
import { ReactTableScroll } from 'react-table-scroll';

<ReactTableScroll>
  <table>...</table>
</ReactTableScroll>
```

## Common API
| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| tableWrapperStyle | CSSProperties | `{}` | The style used for the table wrapper |
| tableContainerStyle | CSSProperties | `{}` | The style used for the table container |
| scrollWrapperStyle | CSSProperties | `{}` | The style used for the scroll wrapper |
| scrollContentStyle | CSSProperties | `{}` | The style used for the scroll layer |
| tableWrapperClass | string | `''` | The class used for the table wrapper |
| tableContainerClass | string | `''` | The class used for the table container |
| scrollWrapperClass | string | `''` | The class used for the scroll wrapper |
| scrollContentClass | string | `''` | The class used for the scroll layer |


## :loudspeaker: Important

**Do not use** **overflow: hidden** in parent layer and above for correct work.

## License

`react-table-scroll` is released under the MIT license.
