/**
 * Product model events
 */

const { EventEmitter } = require('events');
const { Product } = require('../../models');

const ProductEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProductEvents.setMaxListeners(0);

// Model events
const events = {
  afterCreate: 'save',
  afterUpdate: 'save',
  afterDestroy: 'remove',
};

function emitEvent(event) {
  return (doc, options, done) => {
    ProductEvents.emit(`${event}:${doc.id}`, doc);
    ProductEvents.emit(event, doc);
    done(null);
  };
}
// Register the event emitter to the model events
events.forEach((e) => {
  Product.hook(e, emitEvent(e));
});
module.exports = ProductEvents;
