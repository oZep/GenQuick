from datetime import datetime

def calculate_remaining_time():
    now = datetime.now()
    banner_end = datetime(year=2023, month=8, day=31, hour=23, minute=59, second=59)  # Adjust with the actual banner end date and time
    remaining_time = banner_end - now
    return remaining_time.total_seconds()
