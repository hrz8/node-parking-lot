# Parking Lot (using Node JS)

## Usage

### Play the Game

```bash
# Run install/download depedencies  & unit testing
$ bin/setup
```

```bash
# Run app
$ bin/parking_lot
```

```bash
# Run app with file input
$ bin/parking_lot file_input.txt
```

```bash
# run functional spec
$ bin/run_functional_tests
```

### Command List
- `> create_parking_lot [capacity]`: initiate new parking space
- `> park [car plat number/registration number]`: add new car into parking slot
- `> leave [car plat number/registration number] [total hour]`: remove car from parking slot
- `> status`: listing status of used parking slot

## In Action

``` bash
$ bin/parking_lot
> create_parking_lot 5
# Created parking lot with 5 slots
> status
# Slot No. Registration No.
# 0.      -
> park HUHU-9090
# Allocated slot number: 1
> status
# Slot No. Registration No.
# 1       HUHU-9090
> park HIHI-9898
# Allocated slot number: 2
> status
# Slot No. Registration No.
# 1       HUHU-9090
# 2       HIHI-9898
> leave HUHU-9090 4
# Registration number HUHU-9090 with Slot Number 1 is free with Charge 30
> status
# Slot No. Registration No.
# 2       HIHI-9898
> park HIHI-9898
# Car is already in the parking space!
> leave KAKA-0000
# [ERROR] unknown hour amount!
> leave KAKA-0000 0
# [ERROR] hour value argument must be numeric and larger than 0
> leave KAKA-0000 1
# Registration number KAKA-0000 not found
> status
# Slot No. Registration No.
# 2       HIHI-9898
> park JIJI-9090
# Allocated slot number: 1
> status
# Slot No. Registration No.
# 1       JIJI-9090
# 2       HIHI-9898
```

## App Info

### Authors

Hirzi Nurfakhrian

### Version

1.0.0
