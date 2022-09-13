import csv


def write_data(data):
    f = open('contacts.csv', 'w')
    writer = csv.writer(f)
    writer.writerow(data)
    f.close()
