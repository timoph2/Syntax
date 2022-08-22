def zero_fuel(distance_to_pump, mpg, fuel_left):
    d_travel = mpg * fuel_left
    if d_travel >= distance_to_pump:
        return True
    else:
        return False
    