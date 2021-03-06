import PropTypes from 'prop-types';
import React from 'react';

import Btn from './Btn';
import Collapsible from './Collapsible';
import Container from './Container';
import { SectionTitle } from './Section';

const ActivityEntry = () => (
  <div className="flex items-center mb2">
    <div className="flex-none mr1">
      <div
        className="flex items-center h6 center white bg-teal rounded"
        style={{ width: 40, height: 40 }}
      >
        <div className="mx-auto center line-height-1">
          Jun<br />23
        </div>
      </div>
    </div>
    <div className="flex-auto">Tim Smith commented on 2018 IAPD-U.</div>
  </div>
);

const Events = ({ month, events }) => (
  <div>
    <div className="mb1 bold">{month}</div>
    {events.map((e, i) => (
      <div key={i} className="mb1 flex items-center">
        <div>{e.day}</div>
        <div className="ml2 flex-auto p1 bg-blue-light rounded">{e.title}</div>
      </div>
    ))}
  </div>
);

Events.propTypes = {
  month: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired
};

const StatusEntry = () => (
  <div>
    <div className="sm-flex items-center mb2">
      <div className="sm-col-2">
        <div className="bold">2018 IAPD-U</div>
      </div>
      <div className="sm-col-8 progress-bar-basic">
        <div className="dot complete" />
        <div className="bar complete" />
        <div className="dot complete" />
        <div className="bar" />
        <div className="dot" />
      </div>
      <div className="sm-col-2 sm-right-align">
        <Btn>View</Btn>
      </div>
    </div>
    <div className="sm-flex items-center mb2">
      <div className="sm-col-2">
        <div className="bold">Contract</div>
      </div>
      <div className="sm-col-8 progress-bar-basic">
        <div className="dot complete" />
        <div className="bar" />
        <div className="dot" />
        <div className="bar" />
        <div className="dot" />
      </div>
      <div className="sm-col-2 sm-right-align">
        <Btn>View</Btn>
      </div>
    </div>
    <div className="sm-flex items-center mb2">
      <div className="sm-col-2">
        <div className="bold">Contract Amendment</div>
      </div>
      <div className="sm-col-8 progress-bar-basic">
        <div className="dot complete" />
        <div className="bar complete" />
        <div className="dot complete" />
        <div className="bar complete" />
        <div className="dot complete" />
      </div>
      <div className="sm-col-2 sm-right-align">
        <Btn>View</Btn>
      </div>
    </div>
  </div>
);

const TaskTable = () => (
  <table className="table-cms table-fixed">
    <thead>
      <tr>
        <th className="col-2">Document</th>
        <th className="col-2">Type/Name</th>
        <th className="col-4">Status</th>
        <th className="col-2">Due date</th>
        <th className="col-2">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="align-middle">
        <td>APD</td>
        <td>Annual Update</td>
        <td>Awaiting State Response</td>
        <td>09/10/2018</td>
        <td>
          <Btn size="small" extraCss="col-12">
            Respond
          </Btn>
        </td>
      </tr>
      <tr className="align-middle">
        <td>Contract</td>
        <td>Vendor Inc.</td>
        <td>Pending Submission to CMS</td>
        <td>ASAP</td>
        <td>
          <Btn size="small" extraCss="col-12">
            Start
          </Btn>
        </td>
      </tr>
    </tbody>
  </table>
);

const StateDash = () => (
  <Container>
    <SectionTitle>My Dashboard</SectionTitle>
    <Collapsible title="My tasks" open>
      <TaskTable />
    </Collapsible>
    <Collapsible title="Current statuses" open>
      <StatusEntry />
    </Collapsible>
    <div className="sm-flex mxn2">
      <div className="sm-col-6 px2">
        <Collapsible title="Recent activity" open>
          <ActivityEntry />
          <ActivityEntry />
          <ActivityEntry />
        </Collapsible>
      </div>
      <div className="sm-col-6 px2">
        <Collapsible title="Upcoming events" open>
          <h3 className="mt0 pb1 light border-bottom">2018</h3>
          <Events
            month="June"
            events={[
              { day: 26, title: 'Quarterly Report Due' },
              { day: 30, title: 'Performance Progress CoP' }
            ]}
          />
          <Events
            month="July"
            events={[{ day: 7, title: 'Annual APD Due' }]}
          />
        </Collapsible>
      </div>
    </div>
  </Container>
);

export default StateDash;
