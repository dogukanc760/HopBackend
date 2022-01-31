var Travel = require('../models/travel.model');
var User = require('../models/user.model');

exports.get = async function(query){
    try {
        var travels = await Travel.find(query);
        return travels;
    } catch (error) {
        return error;
    }
}

exports.getByUserId = async function(userId){
    try {
        var travels = await Travel.find({userId:{$in:userId}});
        return travels;
    } catch (error) {
        return error;
    }
}

exports.add = async function(info){
    try {
        var user = await User.findOne({
            isProvider:{$in:true},
            locationCity:{$in:info.startCity},
            locationDistinct:{$in:info.startLocation},
            status:{$in:true}
        });
        var newTravel = new Travel({
            userId: info.userId,
            providerId: user._id,
            isCash: info.isCash,
            expectedTime: info.expectedTime,
            licencePlate: info.licencePlate,
            card:info.card,
            paymentMethod: info.paymentMethod,
            startCity: info.startCity,
            startLocation: info.startLocation,
            endLocation: info.endLocation,
            providerLocation: info.providerLocation,
            calledHour: info.calledHour,
            startHour: info.startHour,
            endHour: info.endHour,
            whenProvider: info.whenProvider,
            providerVehicle: info.providerVehicle,
            providerVehicleType: info.providerVehicleType,
            providerRating: info.providerRating,
            status: info.status,
            isActive: info.isActive,
        });
        const savedTravel = await newTravel.save();
        console.log(savedTravel);
        user.status = false;
        const updateProvider = await User.findByIdAndUpdate(
            user._id, {$set:user}, {new:true}
        );
        
        console.log(updateProvider);
        return newTravel;

    } catch (error) {
        return error;
    }
}

exports.update = async function(travelId, info){
  try {
      const updatedUser = Travel.findByIdAndUpdate(
          travelId,
          {$set:info},
          {new:true}
      );
      return updatedUser;
  } catch (error) {
      return error;
  }
}

exports.updateForTravel = async function(travelId, info){
    try {
        const updatedUser = Travel.findByIdAndUpdate(
            travelId,
            {$set:info},
            {new:true}
        );
        return updatedUser;
    } catch (error) {
        return error;
    }
  }

exports.delete = async function(travelId){
    try {
        const deleteTravel = Travel.findByIdAndDelete(travelId);
        return deleteTravel;
    } catch (error) {
        return error;
    }
}