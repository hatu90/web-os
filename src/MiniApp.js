import React from 'react';
import { useParams } from 'react-router-dom';
import { loadJS } from './utils';

export function MiniApp({ apps }) {
  const { appId } = useParams();
  console.log(appId);
  const selectedApp = React.useMemo(() => {
    return apps.find((app) => app.id === appId);
  }, [appId, apps]);

  React.useEffect(() => {
    if (selectedApp) {
      loadJS(selectedApp.url, selectedApp.id)
        .then(() => {
          if (window.apps && window.apps[selectedApp.id]) {
            window.apps[selectedApp.id].render({ elementId: 'mini-app', basePath: `/${selectedApp.id}` })
          }
        })
    }
  }, [selectedApp]);

  return (
    <div id='mini-app'></div>
  )
}
