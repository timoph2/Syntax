


def printMegaBytesAndKiloBytes(kiloBytes):

    if kiloBytes < 0:
        print("invalid")

    else:
        megabytes = kiloBytes // 1024
        remainder = kiloBytes % 1024

        

        print(f'{kiloBytes} KB = {megabytes}MB & {remainder}KB')


printMegaBytesAndKiloBytes(2500)











 