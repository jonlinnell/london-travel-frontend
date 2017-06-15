import React from 'react';
import IconDone from 'material-ui/svg-icons/action/done';
import IconSchedule from 'material-ui/svg-icons/action/schedule';
import IconCross from 'material-ui/svg-icons/content/clear';
import IconAlert from 'material-ui/svg-icons/alert/error-outline';
import LineColours from '../LineColours';

function lineTextColour(line) {
  return LineColours.text[line.id] || 'rgb(255,255,255)';
}

function lineIcon(line) {
  const status = line.lineStatuses[0].statusSeverity;
  if (status === 10) {
    return (
      <IconDone
        color={lineTextColour(line)}
      />
    );
  } else if (status === 20) {
    return (
      <IconCross
        color={lineTextColour(line)}
      />
    );
  } else if ([2, 3, 4, 5, 11].indexOf(status) > -1) {
    return (
      <IconAlert
        color={lineTextColour(line)}
      />
    );
  } else if ([6, 7, 9].indexOf(status) > -1) {
    return (
      <IconSchedule
        color={lineTextColour(line)}
      />
    );
  } else {
    return (null);
  }
}

export { lineIcon, lineTextColour };
