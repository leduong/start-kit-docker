/**
 * Order model events
 */

const { EventEmitter } = require('events');
const { Order } = require('../../models');

const OrderEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OrderEvents.setMaxListeners(0);

// Model events
const events = {
  afterCreate: 'save',
  afterUpdate: 'save',
  afterDestroy: 'remove',
};

function emitEvent(event) {
  return (doc, options, done) => {
    OrderEvents.emit(`${event}:${doc.id}`, doc);
    OrderEvents.emit(event, doc);
    done(null);
  };
}
// Register the event emitter to the model events
events.forEach((e) => {
  Order.hook(e, emitEvent(e));
});
module.exports = OrderEvents;
