def enough(cap, on, wait):
    if (cap-on-wait) > 0:
        return 0
    return -(cap-on-wait)