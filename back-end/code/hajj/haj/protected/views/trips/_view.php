<?php
/* @var $this TripsController */
/* @var $data Trips */
?>

<div class="view">

    <b><?php echo CHtml::encode($data->getAttributeLabel('id')); ?>:</b>
    <?php echo CHtml::link(CHtml::encode($data->id), array('view', 'id' => $data->id)); ?>
    <br/>

    <b><?php echo CHtml::encode($data->getAttributeLabel('bus_id')); ?>:</b>
    <?php echo CHtml::encode($data->bus_id); ?>
    <br/>

    <b><?php echo CHtml::encode($data->getAttributeLabel('source_station_id')); ?>:</b>
    <?php echo CHtml::encode($data->source_station_id); ?>
    <br/>

    <b><?php echo CHtml::encode($data->getAttributeLabel('destination')); ?>:</b>
    <?php echo CHtml::encode($data->destination); ?>
    <br/>

    <b><?php echo CHtml::encode($data->getAttributeLabel('departure_time')); ?>:</b>
    <?php echo CHtml::encode($data->departure_time); ?>
    <br/>

    <b><?php echo CHtml::encode($data->getAttributeLabel('arrival_time')); ?>:</b>
    <?php echo CHtml::encode($data->arrival_time); ?>
    <br/>

    <b><?php echo CHtml::encode($data->getAttributeLabel('free_seats')); ?>:</b>
    <?php echo CHtml::encode($data->free_seats); ?>
    <br/>

    <?php /*
	<b><?php echo CHtml::encode($data->getAttributeLabel('occupied_seats')); ?>:</b>
	<?php echo CHtml::encode($data->occupied_seats); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('created_at')); ?>:</b>
	<?php echo CHtml::encode($data->created_at); ?>
	<br />

	*/ ?>

</div>